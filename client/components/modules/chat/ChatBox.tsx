import React, {useEffect, useRef, useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {useDispatch} from 'react-redux';
import './ChatBox.scss';
import ChatMessage from './message/ChatMessage';
import {setTimerDisabled} from '../../../actions/timer';
import {socketClient} from '../../../util/socket/socketio';
import {cleanBadWords} from '../../../util/strings/chat_filter';
import {MatchConst} from '../../../shared/match/consts';
import block from '../../../styles/bem';
import {MatchUpdateChat} from '../../../shared/match/types';
import {useSocketListener} from '../../../util/hooks/useSocketListener';
import {GameType} from '../../../../shared/match/consts';
import {Match} from '../../../../server/schemas/Match.schema';

const b = block('chat-box');

interface Props {
	disabled?: boolean;
	match: Match;
	matchType: GameType;
	messages: MatchUpdateChat[];
}

export default function ChatBox(props: Props) {
	const dispatch = useDispatch();

	const {disabled, match} = props;

	const [message, setMessage] = useState('');
	const [textBoxHeight, setTextBoxHeight] = useState(25);
	const [messageFocused, setMessageFocused] = useState(false);
	const [messages, setMessages] = useState<MatchUpdateChat[]>(props.messages);

	const messageInput = useRef<HTMLTextAreaElement>();
	const chatList = useRef<HTMLDivElement>();

	useSocketListener('newMatchChatMessage', addMessage, [messages]);

	useEffect(() => {
		setMessages(() => props.messages);
		scrollToBottomOfList();
	}, [props.messages]);

	function handleMessageChange(e) {
		setMessage(e.target.value);
	}

	function onFocus() {
		dispatch(setTimerDisabled(true));
		setMessageFocused(true);
	}

	function onBlur() {
		dispatch(setTimerDisabled(false));
		setMessageFocused(false);
	}

	function textBoxHeightChange(height: number) {
		setTextBoxHeight(height);
		setTimeout(scrollToBottomOfList);
	}

	function scrollToBottomOfList() {
		chatList.current.scrollTop = chatList.current.scrollHeight;
	}

	function handleMessageKeyPress(e) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();

			const cleanMessage = cleanBadWords(message);
			const badWords = message !== cleanMessage;

			if (!cleanMessage.trim() || cleanMessage.length > MatchConst.MAX_CHAT_MESSAGE_LENGTH) {
				return;
			}

			setMessage('');

			socketClient().emit('playerSentChatMessage', {
				matchId: match.id,
				matchSessionId: match.match_session_id,
				badWords,
				rawMessage: message,
				message: cleanMessage,
			});
		}
	}

	function aggMessages() {
		const output = [];
		let temp = [];

		for (const msg of messages) {
			if (temp.length && temp[temp.length - 1].user.id !== msg.user.id) {
				output.push({
					user: temp[0].user,
					id: temp[0].id,
					messages: temp.map((t) => t.message),
				});
				temp = [];
			}

			temp.push(msg);
		}

		if (temp.length) {
			output.push({
				user: temp[0].user,
				id: temp[0].id,
				messages: temp.map((t) => t.message),
			});
		}

		return output;
	}

	function addMessage(chat: MatchUpdateChat) {
		const messagesCopy = [...messages];

		for (const msg of messages) {
			if (msg.id === chat.id) {
				// Don't add message if already exists
				return;
			}
		}

		messagesCopy.push(chat);
		setMessages(messagesCopy);
		setTimeout(scrollToBottomOfList);
	}

	const chatMessages = [...aggMessages()].map((m) => <ChatMessage user={m.user} messages={m.messages} key={m.id} />);

	let textArea = (
		<div className={b('wrapper')}>
			<TextareaAutosize
				onChange={handleMessageChange}
				onFocus={onFocus}
				onBlur={onBlur}
				onHeightChange={textBoxHeightChange}
				value={message}
				onKeyPress={handleMessageKeyPress}
				minRows={1}
				maxRows={4}
				placeholder="Send message..."
				ref={messageInput}
				className={b('textbox', {
					focused: messageFocused,
					error: message.length > MatchConst.MAX_CHAT_MESSAGE_LENGTH,
				})}
			/>
		</div>
	);

	if (disabled) {
		textArea = null;
	}

	return (
		<div className={b()}>
			<div className={b('list')} ref={chatList}>
				{chatMessages}
			</div>
			{textArea}
		</div>
	);
}
