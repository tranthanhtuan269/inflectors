const rules = [

	// [long vowel][consonant]
	{
		test: /([uao]m[pb]|[oa]wn|ey|elp|[ei]gn|ilm|o[uo]r|[oa]ugh|igh|ki|ff|oubt|ount|awl|o[alo]d|[iu]rl|upt|[oa]y|ight|oid|empt|act|aud|e[ea]d|ound|[aeiou][srcln]t|ept|dd|[eia]n[dk]|[ioa][xk]|[oa]rm|[ue]rn|[ao]ng|uin|eam|ai[mr]|[oea]w|[eaoui][rscl]k|[oa]r[nd]|ear|er|[^aieouyfm]it|[aeiouy]ir|[^aieouyfm]et|ll|en|vil|om|[^rno].mit|rup|bat|val|.[^skxwb][rvmchslwngb]el)$/,
		transform: function (vb: string, to: string): string {
			if (to === "VBZ") return vb + 's';
			if (to === "VBG") return vb + 'ing';
			if (to === "VBN" || to === "VBD") return vb + 'ed';
			return vb;
		}
	},

	// [consonant][y]
	{
		test: /[^aeiou]y$/,
		transform: function (vb: string, to: string): string {
			var base = vb.substr(0, vb.length - 1);
			if (to === "VBZ") return base + 'ies';
			if (to === "VBG") return vb + 'ing';
			if (to === "VBN" || to === "VBD") return base + 'ied';
			return vb;
		}
	},

	// [consonant][e]
	{
		test: /[^aeiouy]e$/,
		transform: function (vb: string, to: string): string {
			var base = vb.substr(0, vb.length - 1);
			if (to === "VBZ") return vb + 's';
			if (to === "VBG") return base + 'ing';
			if (to === "VBN" || to === "VBD") return base + 'ed';
			return vb;
		}
	},


	// [short vowel][consonant]
	{
		test: /([^dtaeiuo][aeiuo][ptlgnm]|ir|cur|ug|[hj]ar|[^aouiey]ep|[^aeiuo][oua][db])$/,
		transform: function (vb: string, to: string): string {
			if (to === "VBZ") return vb + 's';
			if (to === "VBG") return vb + vb[vb.length - 1] + 'ing';
			if (to === "VBN" || to === "VBD") return vb + vb[vb.length - 1] + 'ed';
			return vb;
		}
	},


	// [sibilant]
	{
		test: /([ieao]ss|[aeiouy]zz|[aeiouy]ch|nch|rch|[aeiouy]sh|[iae]tch|ax)$/,
		transform: function (vb: string, to: string): string {
			if (to === "VBZ") return vb + 'es';
			if (to === "VBG") return vb + 'ing';
			if (to === "VBN" || to === "VBD") return vb + 'ed';
			return vb;
		}
	},


	// [e][e]
	{
		test: /(ee)$/,
		transform: function (vb: string, to: string): string {
			if (to === "VBZ") return vb + 's';
			if (to === "VBG") return vb + 'ing';
			if (to === "VBN" || to === "VBD") return vb + 'd';
			return vb;
		}
	},

	// [i][e]
	{
		test: /(ie)$/,
		transform: function (vb: string, to: string): string {
			if (to === "VBZ") return vb + 's';
			if (to === "VBG") return vb.substr(0, vb.length - 2) + 'ying';
			if (to === "VBN" || to === "VBD") return vb + 'd';
			return vb;
		}
	},

	// [u][e]
	{
		test: /(ue)$/,
		transform: function (vb: string, to: string): string {
			if (to === "VBZ") return vb + 's';
			if (to === "VBG") return vb.substr(0, vb.length - 1) + 'ing';
			if (to === "VBN" || to === "VBD") return vb + 'd';
			return vb;
		}
	},

	// default (regular)
	{
		test: /./,
		transform: function (vb: string, to: string): string {
			if (to === "VBZ") return vb + 's';
			if (to === "VBG") return vb + 'ing';
			if (to === "VBN" || to === "VBD") return vb + 'ed';
			return vb;
		}
	}
];


function solve(input: string, to: string): string {
	for (let i = 0; i < rules.length; i++) {
		let rule = rules[i];
		if (rule.test.test(input)) return rule.transform(input, to);
	}
	return "";
}

export { solve };