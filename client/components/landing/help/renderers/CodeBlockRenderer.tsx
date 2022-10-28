import React from 'react';
import './CodeBlockRenderer.scss';
import block from '../../../../styles/bem';

const b = block('code-block-renderer');

interface Props {
	src?: string;
	alt?: string;
}

export default function CodeBlockRenderer(props: Props) {
	const imageSrc = props.src;
	const altText = props.alt;
	return (
		<figure className="wp-block-image size-large is-resized">
			<img
				data-loading="lazy"
				data-orig-file={imageSrc}
				data-orig-size="1248,533"
				data-comments-opened="1"
				data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
				data-image-title="builtin_vs_dotnetwarp"
				data-image-description=""
				data-medium-file={imageSrc + '?w=300'}
				data-large-file={imageSrc + '?w=750'}
				src={imageSrc + '?w=10241'}
				alt={altText}
				srcSet={
					imageSrc +
					'?w=1024 1024w, ' +
					imageSrc +
					'?w=705 705w, ' +
					imageSrc +
					'?w=150 150w, ' +
					imageSrc +
					'?w=300 300w, ' +
					imageSrc +
					'?w=768 768w, ' +
					imageSrc +
					'?1248w'
				}
				sizes="(max-width: 707px) 100vw, 707px"
			/>
			<figcaption style={{textAlign: 'center'}}>{altText}</figcaption>
		</figure>
	);
}
