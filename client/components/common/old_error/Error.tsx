import './Error.scss';

interface Props {
	text?: string;
}

export default function Error({text}: Props) {
	return <div className="cd-common__error">{text}</div>;
}
