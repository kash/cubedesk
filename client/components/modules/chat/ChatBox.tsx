import {setTimerDisabled} from '@/actions/timer';
import ChatMessage from '@/components/modules/chat/ChatMessage';
import {MatchConst} from '@/client/shared/match/consts';
import {MatchUpdateChat} from '@/client/shared/match/types';
import {Match} from '@/types/match';
import {PublicUserAccount} from '@/types/user';
import {useSocketListener} from '@/util/hooks/useSocketListener';
import {socketClient} from '@/util/socket/socketio';
import {cleanBadWords} from '@/util/strings/chat_filter';
import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import {GameType} from '@/shared/match/consts';

interface AggregatedChat {
	user: PublicUserAccount;
	id: string;
	messages: string[];
}

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

	const messageInput = useRef<HTMLTextAreaElement>(null);
	const chatList = useRef<HTMLDivElement>(null);

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
		if (chatList.current) {
			chatList.current.scrollTop = chatList.current.scrollHeight;
		}
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
		const output: AggregatedChat[] = [];
		let temp: MatchUpdateChat[] = [];

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
	const textBoxClasses = [
		'box-border',
		'w-full',
		'resize-none',
		'overflow-hidden',
		'rounded-md',
		'border-2',
		'border-solid',
		'bg-button',
		'p-[7px]',
		'text-base',
		'text-tmo-button',
		'transition-all',
		'duration-100',
		'ease-in-out',
		messageFocused ? 'opacity-100' : 'opacity-80',
		message.length > MatchConst.MAX_CHAT_MESSAGE_LENGTH ? 'border-error' : 'border-transparent',
	];

	let textArea: ReactNode = (
		<div className="box-border flex w-full items-center justify-center p-[5px]">
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
				className={textBoxClasses.join(' ')}
			/>
		</div>
	);

	if (disabled) {
		textArea = null;
	}

	return (
		<div className="relative grid h-full w-full grid-rows-[auto_min-content]">
			<div className="box-border flex w-full flex-col gap-3 overflow-auto px-[5px] pt-[5px]" ref={chatList}>
				{chatMessages}
			</div>
			{textArea}
		</div>
	);
}
