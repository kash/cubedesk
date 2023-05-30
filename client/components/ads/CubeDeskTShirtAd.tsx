import React from 'react';
import {TShirt} from '@phosphor-icons/react';
import MiniAd from './core/MiniAd';

/**
 * Format for ad_key
 *
 * advertiser_shortname_location_adtype_launchDDMMYY
 *
 * Ex: cubicle_black_tshirt_footer_bottom_mini_130822
 *
 */

const AD_KEY = 'cubicle_black_tshirt_footer_bottom_mini_130822';

export default function CubeDeskTShirtAd() {
	return (
		<MiniAd
			adKey={AD_KEY}
			link="https://www.thecubicle.com/collections/new-arrivals/products/cubedesk-t-shirt-1"
			backgroundColor="white"
			iconColor="black"
			icon={<TShirt weight="fill" />}
			text="CubeDesk t-shirts are here! Pick up a new, clean t-shirt for just $26.99."
		/>
	);
}
