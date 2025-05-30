import React, {useCallback, useEffect, useRef, useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {useDispatch} from 'react-redux';
import './ChatBox.scss';
import ChatMessage from './message/ChatMessage';
import {setTimerDisabled} from '../../../lib/actions/timer';
import {socketClient} from '../../../lib/util/socket/socketio';
import {cleanBadWords} from '../../../lib/util/strings/chat_filter';
import {MatchConst} from '../../../lib/shared/match/consts';
import block from '../../../styles/bem';
import {MatchUpdateChat} from '../../../lib/shared/match/types';
import {useSocketListener} from '../../../lib/util/hooks/useSocketListener';
import {GameType} from '../../../shared/match/consts';
import {Match} from '@/generated/zod';

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

	const handleMessageChange = useCallback((e) => {
		setMessage(e.target.value);
	}, []);

	const onFocus = useCallback(() => {
		dispatch(setTimerDisabled(true));
		setMessageFocused(true);
	}, [dispatch]);

	const onBlur = useCallback(() => {
		dispatch(setTimerDisabled(false));
		setMessageFocused(false);
	}, [dispatch]);

	const scrollToBottomOfList = useCallback(() => {
		chatList.current.scrollTop = chatList.current.scrollHeight;
	}, []);

	const textBoxHeightChange = useCallback((height: number) => {
		setTextBoxHeight(height);
		setTimeout(scrollToBottomOfList);
	}, [scrollToBottomOfList])

	const handleMessageKeyPress = useCallback((e) => {
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
	}, [message, match.id, match.match_session_id])

	const aggMessages = useCallback(() => {
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
	}, [messages])

	const addMessage = useCallback((chat: MatchUpdateChat) => {
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
	}, [messages, scrollToBottomOfList]);

	useSocketListener('newMatchChatMessage', addMessage, [messages]);

	useEffect(() => {
		setMessages(() => props.messages);
		scrollToBottomOfList();
	}, [props.messages, scrollToBottomOfList]);

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
