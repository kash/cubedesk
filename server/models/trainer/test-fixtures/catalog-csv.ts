// Keep bulk-import coverage independent of a production catalog export.
export const catalogCsv = [
	'id,name,active,solution,scrambles,algo_type_id,algo_type,cube_type,group_name,img_link,colors,rotate,pro_only',
	...Array.from({length: 738}, (_, index) =>
		[
			`sample_${index}`,
			`Sample ${index}`,
			'checked',
			'R U',
			'"U R\nR U"',
			'3_pll',
			'PLL',
			'333',
			'Sample group',
			'',
			'"#43FF43,#FF8A06"',
			'0.0',
			index % 2 === 0 ? 'checked' : '',
		].join(','),
	),
	'missing_solution_a,Incomplete A,checked,,,,ZBLL,333,,,,0.0,checked',
	'missing_solution_b,Incomplete B,checked,,,,ZBLL,333,,,,0.0,',
].join('\n');
