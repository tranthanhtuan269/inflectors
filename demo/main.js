! function (e) {
	function r(i) {
		if (t[i]) return t[i].exports;
		var a = t[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return e[i].call(a.exports, a, a.exports, r), a.l = !0, a.exports
	}
	var t = {};
	r.m = e, r.c = t, r.i = function (e) {
		return e
	}, r.d = function (e, t, i) {
		r.o(e, t) || Object.defineProperty(e, t, {
			configurable: !1,
			enumerable: !0,
			get: i
		})
	}, r.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return r.d(t, "a", t), t
	}, r.o = function (e, r) {
		return Object.prototype.hasOwnProperty.call(e, r)
	}, r.p = "", r(r.s = 7)
}([function (e, r, t) {
	"use strict";
	r.__esModule = !0;
	var i = t(5);
	r.irregular = [
		["abhor", "abhorred", "abhorred", "abhors", "abhorring"],
		["abide", "abode", "abode", "abides", "abiding"],
		["acquit", "acquitted", "acquitted", "acquits", "acquitting"],
		["admit", "admitted", "admitted", "admits", "admitting"],
		["affix", "affixed", "affixed", "affixes", "affixing"],
		["apparel", "apparelled", "apparelled", "apparels", "apparelling"],
		["arise", "arose", "arisen", "arises", "arising"],
		["aver", "averred", "averred", "avers", "averring"],
		["aver", "averred", "averred", "avers", "averring"],
		["awake", "awoke", "awoken", "awakes", "awaking"],
		["babysit", "babysat", "babysat", "babysits", "babysitting"],
		["backbite", "backbit", "backbit", "backbites", "backbiting"],
		["backslide", "backslid", "backslid", "backslides", "backsliding"],
		["bat", "batted", "batted", "bats", "batting"],
		["be", "was", "been", "am", "being"],
		["be", "was", "been", "is", "being"],
		["be", "were", "been", "are", "being"],
		["bear", "bore", "born", "bears", "bearing"],
		["bear", "bore", "borne", "bears", "bearing"],
		["beat", "beat", "beaten", "beats", "beating"],
		["beckon", "beckoned", "beckoned", "beckons", "beckoning"],
		["become", "became", "become", "becomes", "becoming"],
		["bedim", "bedimmed", "bedimmed", "bedims", "bedimming"],
		["befall", "befell", "befallen", "befalls", "befalling"],
		["begin", "began", "begun", "begins", "beginning"],
		["behold", "beheld", "beheld", "beholds", "beholding"],
		["belch", "belched", "belched", "belches", "belching"],
		["bend", "bent", "bent", "bends", "bending"],
		["benefit", "benefited", "benefited", "benefits", "benefiting"],
		["bereave", "bereft", "bereft", "bereaves", "bereaving"],
		["beseech", "besought", "besought", "beseeches", "beseeching"],
		["bet", "bet", "bet", "bets", "betting"],
		["bias", "biased", "biased", "biases", "biasing"],
		["bib", "bibbed", "bibbed", "bibs", "bibbing"],
		["bib", "bibbed", "bibbed", "bibs", "bibbing"],
		["bid", "bade", "bidden", "bids", "bidding"],
		["bid", "bid", "bid", "bids", "bidding"],
		["billet", "billetted", "billetted", "billets", "billetting"],
		["bind", "bound", "bound", "binds", "binding"],
		["bite", "bit", "bitten", "bites", "biting"],
		["blazon", "blazoned", "blazoned", "blazons", "blazoning"],
		["bleed", "bled", "bled", "bleeds", "bleeding"],
		["blow", "blew", "blown", "blows", "blowing"],
		["blur", "blurred", "blurred", "blurs", "blurring"],
		["bobsled", "bobsledded", "bobsledded", "bobsleds", "bobsledding"],
		["bollix", "bollixed", "bollixed", "bollixes", "bollixing"],
		["box", "boxed", "boxed", "boxes", "boxing"],
		["break", "broke", "broken", "breaks", "breaking"],
		["breastfeed", "breastfed", "breastfed", "breastfeeds", "breastfeeding"],
		["breed", "bred", "bred", "breeds", "breeding"],
		["bring", "brought", "brought", "brings", "bringing"],
		["broadcast", "broadcast", "broadcast", "broadcasts", "broadcasting"],
		["browbeat", "browbeat", "browbeat", "browbeats", "browbeating"],
		["buffet", "buffeted", "buffeted", "buffets", "buffeting"],
		["build", "built", "built", "builds", "building"],
		["burn", "burnt", "burnt", "burns", "burning"],
		["burst", "burst", "burst", "bursts", "bursting"],
		["buss", "bussed", "bussed", "busses", "bussing"],
		["buss", "bussed", "bussed", "busses", "bussing"],
		["bust", "bust", "bust", "busts", "busting"],
		["buy", "bought", "bought", "buys", "buying"],
		["callous", "calloused", "calloused", "callouses", "callousing"],
		["callous", "calloused", "calloused", "callouses", "callousing"],
		["can", "could", "could", "can", "can"],
		["canal", "canaled", "canaled", "canals", "canaling"],
		["cancel", "cancelled", "cancelled", "cancels", "cancelling"],
		["caparison", "caparisoned", "caparisoned", "caparisons", "caparisoning"],
		["cast", "cast", "cast", "casts", "casting"],
		["catalog", "cataloged", "cataloged", "catalogs", "cataloging"],
		["catch", "caught", "caught", "catches", "catching"],
		["cavil", "cavilled", "cavilled", "cavils", "cavilling"],
		["chagrin", "chagrined", "chagrined", "chagrins", "chagrining"],
		["chairman", "chairmaned", "chairmaned", "chairmans", "chairmaning"],
		["channel", "channelled", "channelled", "channels", "channelling"],
		["char", "chared", "chared", "chars", "charing"],
		["chide", "chid", "chidden", "chides", "chiding"],
		["chirrup", "chirrupped", "chirrupped", "chirrups", "chirrupping"],
		["chisel", "chiselled", "chiselled", "chisels", "chiselling"],
		["choir", "choirred", "choirred", "choirs", "choirring"],
		["choose", "chose", "chosen", "chooses", "choosing"],
		["chorus", "chorused", "chorused", "choruses", "chorusing"],
		["cleave", "cleft", "cleft", "cleaves", "cleaving"],
		["cleave", "clove", "cloven", "cleaves", "cleaving"],
		["climax", "climaxed", "climaxed", "climaxes", "climaxing"],
		["cling", "clung", "clung", "clings", "clinging"],
		["clothe", "clad", "clad", "clothes", "clothing"],
		["clutch", "clutched", "clutched", "clutches", "clutching"],
		["coax", "coaxed", "coaxed", "coaxes", "coaxing"],
		["coif", "coiffed", "coiffed", "coifs", "coiffing"],
		["combat", "combatted", "combatted", "combats", "combatting"],
		["come", "came", "come", "comes", "coming"],
		["comfit", "comfited", "comfited", "comfits", "comfiting"],
		["commix", "commixed", "commixed", "commixes", "commixing"],
		["confer", "conferred", "conferred", "confers", "conferring"],
		["cope", "coped", "cope", "copes", "coping"],
		["cosset", "cossetted", "cossetted", "cossets", "cossetting"],
		["cost", "cost", "cost", "costs", "costing"],
		["counsel", "counselled", "counselled", "counsels", "counselling"],
		["creep", "crept", "crept", "creeps", "creeping"],
		["crib", "cribbed", "cribbed", "cribs", "cribbing"],
		["crochet", "crochetted", "crochetted", "crochets", "crochetting"],
		["crossbreed", "crossbred", "crossbred", "crossbreeds", "crossbreeding"],
		["cuss", "cussed", "cussed", "cusses", "cussing"],
		["custom-make", "custom-made", "custom-made", "custom-makes", "custom-making"],
		["cut", "cut", "cut", "cuts", "cutting"],
		["daydream", "daydreamt", "daydreamt", "daydreams", "daydreaming"],
		["deal", "dealt", "dealt", "deals", "dealing"],
		["debar", "debarred", "debarred", "debars", "debarring"],
		["defer", "deferred", "deferred", "defers", "deferring"],
		["demur", "demurred", "demurred", "demurs", "demurring"],
		["desex", "desexed", "desexed", "desexes", "desexing"],
		["deter", "deterred", "deterred", "deters", "deterring"],
		["develop", "developed", "developed", "develops", "developing"],
		["devil", "devilled", "devilled", "devils", "devilling"],
		["dig", "dug", "dug", "digs", "digging"],
		["dim", "dimmed", "dimmed", "dims", "dimming"],
		["dip", "dipped", "dipped", "dips", "dipping"],
		["discomfit", "discomfited", "discomfited", "discomfits", "discomfiting"],
		["discuss", "discussed", "discussed", "discusses", "discussing"],
		["disembowel", "disembowelled", "disembowelled", "disembowels", "disembowelling"],
		["dishevel", "dishevelled", "dishevelled", "dishevels", "dishevelling"],
		["disprove", "disproved", "disproven", "disproves", "disproving"],
		["do", "did", "done", "does", "doing"],
		["dog", "dogged", "dogged", "dogs", "dogging"],
		["draw", "drew", "drawn", "draws", "drawing"],
		["dream", "dreamt", "dreamt", "dreams", "dreaming"],
		["drink", "drank", "drunk", "drinks", "drinking"],
		["drive", "drove", "driven", "drives", "driving"],
		["drivel", "drivelled", "drivelled", "drivels", "drivelling"],
		["dun", "dunned", "dunned", "duns", "dunning"],
		["dwell", "dwelt", "dwelt", "dwells", "dwelling"],
		["dye", "dyed", "dyed", "dyes", "dyeing"],
		["eat", "ate", "eaten", "eats", "eating"],
		["emblazon", "emblazoned", "emblazoned", "emblazons", "emblazonning"],
		["emit", "emited", "emited", "emits", "emiting"],
		["empanel", "empanelled", "empanelled", "empanels", "empanelling"],
		["endanger", "endangered", "endangered", "endangers", "entangling"],
		["envenom", "envenommed", "envenommed", "envenoms", "envenomming"],
		["equip", "equipped", "equipped", "equips", "equipping"],
		["ex", "exed", "exed", "exes", "exing"],
		["extol", "extolled", "extolled", "extols", "extolling"],
		["eye", "eyed", "eyed", "eyes", "eyeing"],
		["fall", "fell", "fallen", "falls", "falling"],
		["fathom", "fathommed", "fathommed", "fathoms", "fathomming"],
		["fax", "faxed", "faxed", "faxes", "faxing"],
		["feed", "fed", "fed", "feeds", "feeding"],
		["feel", "felt", "felt", "feels", "feeling"],
		["fight", "fought", "fought", "fights", "fighting"],
		["filch", "filched", "filched", "filches", "filching"],
		["filet", "filetted", "filetted", "filets", "filetting"],
		["fillet", "filletted", "filletted", "fillets", "filletting"],
		["find", "found", "found", "finds", "finding"],
		["fit", "fit", "fit", "fits", "fitting"],
		["fix", "fixed", "fixed", "fixes", "fixing"],
		["flee", "fled", "fled", "flees", "fleeing"],
		["flex", "flexed", "flexed", "flexes", "flexing"],
		["flex", "flexed", "flexed", "flexes", "flexing"],
		["fling", "flung", "flung", "flings", "flinging"],
		["flit", "flitted", "flitted", "flits", "flitting"],
		["flummox", "flummoxed", "flummoxed", "flummoxes", "flummoxing"],
		["flummox", "flummoxed", "flummoxed", "flummoxes", "flummoxing"],
		["flux", "fluxed", "fluxed", "fluxes", "fluxing"],
		["fly", "flew", "flown", "flies", "flying"],
		["focus", "focused", "focused", "focuses", "focusing"],
		["forbid", "forbade", "forbidden", "forbids", "forbidding"],
		["forecast", "forecast", "forecast", "forecasts", "forecasting"],
		["foreknow", "foreknew", "foreknew", "foreknows", "foreknowing"],
		["foresee", "foresaw", "foreseen", "foresees", "foreseeing"],
		["foretell", "foretold", "foretold", "foretells", "foretelling"],
		["forget", "forgot", "forgotten", "forgets", "forgetting"],
		["forgive", "forgave", "forgiven", "forgives", "forgiving"],
		["forgo", "forwent", "forwent", "forgos", "forgoing"],
		["forsake", "forsook", "forsaken", "forsakes", "forsaking"],
		["forswear", "forsworn", "forsworn", "forswears", "forswearing"],
		["fox", "foxed", "foxed", "foxes", "foxing"],
		["fox", "foxed", "foxed", "foxes", "foxing"],
		["freeze", "froze", "frozen", "freezes", "freezing"],
		["fret", "fretted", "fretted", "frets", "fretting"],
		["frostbite", "frostbit", "frostbitten", "frostbites", "frostbiting"],
		["fuss", "fussed", "fussed", "fusses", "fussing"],
		["fuss", "fussed", "fussed", "fusses", "fussing"],
		["gainsay", "gainsaid", "gainsaid", "gainsays", "gainsaying"],
		["gas", "gased", "gased", "gases", "gasing"],
		["gas", "gassed", "gassed", "gases", "gassing"],
		["get", "got", "got", "gets", "getting"],
		["gibbet", "gibbetted", "gibbetted", "gibbets", "gibbetting"],
		["give", "gave", "given", "gives", "giving"],
		["glom", "glommed", "glommed", "gloms", "glomming"],
		["go", "went", "gone", "goes", "going"],
		["gravel", "gravelled", "gravelled", "gravels", "gravelling"],
		["grind", "ground", "ground", "grinds", "grinding"],
		["grok", "grokked", "grokked", "groks", "grokking"],
		["grovel", "grovelled", "grovelled", "grovels", "grovelling"],
		["grow", "grew", "grown", "grows", "growing"],
		["hand-feed", "hand-fed", "hand-fed", "hand-feeds", "hand-feeding"],
		["handwrite", "handwrote", "handwritten", "handwrites", "handwriting"],
		["hang", "hung", "hung", "hangs", "hanging"],
		["have", "had", "had", "has", "having"],
		["hear", "heard", "heard", "hears", "hearing"],
		["heave", "hove", "hove", "heaves", "heaving"],
		["hew", "hewed", "hewn", "hews", "hewing"],
		["hex", "hexed", "hexed", "hexes", "hexing"],
		["hide", "hid", "hidden", "hides", "hiding"],
		["hit", "hit", "hit", "hits", "hitting"],
		["hoax", "hoaxed", "hoaxed", "hoaxes", "hoaxing"],
		["hold", "held", "held", "holds", "holding"],
		["hurt", "hurt", "hurt", "hurts", "hurting"],
		["immix", "immixed", "immixed", "immixes", "immixing"],
		["impanel", "impanelled", "impanelled", "impanels", "impanelling"],
		["imperil", "imperiled", "imperiled", "imperils", "imperiling"],
		["imprison", "imprisoned", "imprisoned", "imprisons", "imprisoning"],
		["inbreed", "inbred", "inbred", "inbreeds", "inbreeding"],
		["infer", "inferred", "inferred", "infers", "inferring"],
		["infix", "infixed", "infixed", "infixes", "infixing"],
		["infix", "infixed", "infixed", "infixes", "infixing"],
		["inlay", "inlaid", "inlaid", "inlays", "inlaying"],
		["input", "input", "input", "inputs", "inputting"],
		["interbreed", "interbred", "interbred", "interbreeds", "interbreeding"],
		["intermix", "intermixed", "intermixed", "intermixes", "intermixing"],
		["interpret", "interpretted", "interpretted", "interprets", "interpretting"],
		["interweave", "interwove", "interwoven", "interweaves", "interweaving"],
		["interwind", "interwound", "interwound", "interwinds", "interwinding"],
		["intromit", "intromited", "intromited", "intromits", "intromiting"],
		["iron", "ironed", "ironed", "irons", "ironing"],
		["jar", "jared", "jared", "jars", "jaring"],
		["jerry-build", "jerry-built", "jerry-built", "jerry-builds", "jerry-building"],
		["jet", "jetted", "jetted", "jets", "jetting"],
		["jewel", "jewelled", "jewelled", "jewels", "jewelling"],
		["jinx", "jinxed", "jinxed", "jinxes", "jinxing"],
		["junket", "junketted", "junketted", "junkets", "junketting"],
		["keep", "kept", "kept", "keeps", "keeping"],
		["kid", "kidded", "kidded", "kids", "kidding"],
		["kneel", "knelt", "knelt", "kneels", "kneeling"],
		["knit", "knit", "knit", "knits", "knitting"],
		["know", "knew", "known", "knows", "knowing"],
		["label", "labelled", "labelled", "labels", "labelling"],
		["lade", "laded", "laden", "lades", "lading"],
		["larrup", "larrupped", "larrupped", "larrups", "larrupping"],
		["lay", "laid", "laid", "lays", "laying"],
		["lead", "led", "led", "leads", "leading"],
		["lean", "leant", "leant", "leans", "leaning"],
		["leap", "leapt", "leapt", "leaps", "leaping"],
		["learn", "learnt", "learnt", "learns", "learning"],
		["leave", "left", "left", "leaves", "leaving"],
		["lend", "lent", "lent", "lends", "lending"],
		["let", "let", "let", "lets", "letting"],
		["level", "levelled", "levelled", "levels", "levelling"],
		["lie", "lay", "lain", "lies", "laying"],
		["lie", "lay", "lain", "lies", "lying"],
		["light", "lit", "lit", "lights", "lighting"],
		["lip-read", "lip-read", "lip-read", "lip-reads", "lip-reading"],
		["lose", "lost", "lost", "loses", "losing"],
		["make", "made", "made", "makes", "making"],
		["manumit", "manumited", "manumited", "manumits", "manumiting"],
		["mar", "marred", "marred", "mars", "marring"],
		["market", "marketted", "marketted", "markets", "marketting"],
		["marvel", "marvelled", "marvelled", "marvels", "marvelling"],
		["may", "might", "might", "may", "may"],
		["mean", "meant", "meant", "means", "meaning"],
		["meet", "met", "met", "meets", "meeting"],
		["miscast", "miscast", "miscast", "miscasts", "miscasting"],
		["misdeal", "misdealt", "misdealt", "misdeals", "misdealing"],
		["misdo", "misdid", "misdone", "misdoes", "misdoing"],
		["mishear", "misheard", "misheard", "mishears", "mishearing"],
		["misinterpret", "misinterpretted", "misinterpretted", "misinterprets", "misinterpretting"],
		["mislay", "mislaid", "mislaid", "mislays", "mislaying"],
		["mislead", "misled", "misled", "misleads", "misleading"],
		["mislearn", "mislearnt", "mislearnt", "mislearns", "mislearning"],
		["misread", "misread", "misread", "misreads", "misreading"],
		["misset", "misset", "misset", "missets", "missetting"],
		["misspeak", "misspoke", "misspoken", "misspeaks", "misspeaking"],
		["misspell", "misspelt", "misspelt", "misspells", "misspelling"],
		["misspend", "misspent", "misspent", "misspends", "misspending"],
		["mistake", "mistook", "mistaken", "mistakes", "mistaking"],
		["misteach", "mistaught", "mistaught", "misteaches", "misteaching"],
		["misunderstand", "misunderstood", "misunderstood", "misunderstands", "misunderstanding"],
		["miswrite", "miswrote", "miswritten", "miswrites", "miswriting"],
		["mix", "mixed", "mixed", "mixes", "mixing"],
		["mow", "mowed", "mown", "mows", "mowing"],
		["muss", "mussed", "mussed", "musses", "mussing"],
		["must", "must", "must", "must", "must"],
		["net", "netted", "netted", "nets", "neting"],
		["net", "netted", "netted", "nets", "netting"],
		["nix", "nixed", "nixed", "nixes", "nixing"],
		["nonplus", "nonplused", "nonplused", "nonpluses", "nonplusing"],
		["offset", "offset", "offset", "offsets", "offsetting"],
		["outbid", "outbid", "outbid", "outbids", "outbidding"],
		["outdo", "outdid", "outdone", "outdoes", "outdoing"],
		["outdraw", "outdrew", "outdrawn", "outdraws", "outdrawing"],
		["outfight", "outfought", "outfought", "outfights", "outfighting"],
		["outfox", "outfoxed", "outfoxed", "outfoxes", "outfoxing"],
		["outgrow", "outgrew", "outgrown", "outgrows", "outgrowing"],
		["output", "output", "output", "outputs", "outputting"],
		["outrun", "outran", "outrun", "outran", "outrunning"],
		["outsell", "outsold", "outsold", "outsells", "outselling"],
		["outshine", "outshone", "outshone", "outshines", "outshining"],
		["outspend", "outspent", "outspent", "outspends", "outspending"],
		["outwit", "outwitted", "outwitted", "outwits", "outwitting"],
		["overbid", "overbid", "overbid", "overbids", "overbidding"],
		["overbuild", "overbuilt", "overbuilt", "overbuilds", "overbuilding"],
		["overbuy", "overbought", "overbought", "overbuys", "overbuying"],
		["overcome", "overcame", "overcome", "overcomes", "overcoming"],
		["overdo", "overdid", "overdone", "overdoes", "overdoing"],
		["overdraw", "overdrew", "overdrawn", "overdraws", "overdrawing"],
		["overdrive", "overdrove", "overdrove", "overdrives", "overdriving"],
		["overeat", "overate", "overeaten", "overeats", "overeating"],
		["overfeed", "overfed", "overfed", "overfeeds", "overfeeding"],
		["overhang", "overhung", "overhung", "overhangs", "overhanging"],
		["overhear", "overheard", "overheard", "overhears", "overhearing"],
		["overlay", "overlaid", "overlaid", "overlays", "overlaying"],
		["overlie", "overlaid", "overlaid", "overlies", "overlying"],
		["overpay", "overpaid", "overpaid", "overpays", "overpaying"],
		["override", "overrode", "overridden", "overrides", "overriding"],
		["overrun", "overran", "overrun", "overruns", "overrunning"],
		["oversee", "oversaw", "overseen", "oversees", "overseeing"],
		["oversell", "oversold", "oversold", "oversells", "overselling"],
		["overshoot", "overshot", "overshot", "overshots", "overshooting"],
		["oversleep", "overslept", "overslept", "oversleeps", "oversleeping"],
		["overspeak", "overspoke", "overspoken", "overspeaks", "overspeaking"],
		["overspend", "overspent", "overspent", "overspends", "overspending"],
		["overspill", "overspilt", "overspilt", "overspills", "overspilling"],
		["overspread", "overspread", "overspread", "overspreads", "overspreading"],
		["overstep", "oversteped", "oversteped", "oversteps", "oversteping"],
		["overtake", "overtook", "overtaken", "overtakes", "overtaking"],
		["overthink", "overthought", "overthought", "overthinks", "overthinking"],
		["overthrow", "overthrew", "overthrown", "overthrows", "overthrowing"],
		["overwind", "overwound", "overwound", "overwind", "overwinding"],
		["overwrite", "overwrote", "overwritten", "overwrite", "overwriting"],
		["panel", "panelled", "panelled", "panels", "panelling"],
		["parallel", "parallelled", "parallelled", "parallels", "parallelling"],
		["partake", "partook", "partaken", "partakes", "partaking"],
		["pay", "paid", "paid", "pays", "paying"],
		["peril", "periled", "periled", "perils", "periling"],
		["permit", "permitted", "permitted", "permits", "permitting"],
		["perplex", "perplexed", "perplexed", "perplexes", "perplexing"],
		["pilot", "piloted", "piloted", "pilots", "piloting"],
		["pit", "pitted", "pitted", "pits", "pitting"],
		["pivot", "pivoted", "pivoted", "pivots", "pivoting"],
		["plead", "pled", "pled", "pleads", "pleading"],
		["plummet", "plummeted", "plummeted", "plummets", "plummeting"],
		["pocket", "pocketted", "pocketted", "pockets", "pocketting"],
		["poison", "poisoned", "poisoned", "poisons", "poisoning"],
		["pommel", "pommelled", "pommelled", "pommels", "pommelling"],
		["prebuild", "prebuilt", "prebuilt", "prebuils", "prebuilding"],
		["prefer", "preferred", "preferred", "prefers", "preferring"],
		["preset", "preset", "preset", "presets", "presetting"],
		["preshrink", "preshrank", "preshrunk", "preshrinks", "preshrinking"],
		["profit", "profited", "profited", "profits", "profiting"],
		["profit", "profited", "profited", "profits", "profitting"],
		["proofread", "proofread", "proofread", "proofreads", "proofreading"],
		["pummel", "pummelled", "pummelled", "pummels", "pummelling"],
		["put", "put", "put", "puts", "putting"],
		["quarrel", "quarrelled", "quarrelled", "quarrels", "quarrelling"],
		["quick-freeze", "quick-froze", "quick-frozen", "quick-freezes", "quick-freezing"],
		["quit", "quit", "quit", "quits", "quitting"],
		["racket", "racketted", "racketted", "rackets", "racketting"],
		["ransom", "ransommed", "ransommed", "ransoms", "ransomming"],
		["ravel", "ravelled", "ravelled", "ravels", "ravelling"],
		["read", "read", "read", "reads", "reading"],
		["reason", "reasoned", "reasoned", "reasons", "reasoning"],
		["rebel", "rebelled", "rebelled", "rebels", "rebelling"],
		["rebid", "rebid", "rebid", "rebids", "rebidding"],
		["rebind", "rebound", "rebound", "rebinds", "rebinding"],
		["rebuild", "rebuilt", "rebuilt", "rebuilds", "rebuilding"],
		["recast", "recast", "recast", "recasts", "recasting"],
		["redo", "redid", "redone", "redoes", "redoing"],
		["redraw", "redrew", "redrawn", "redraws", "redrawing"],
		["refer", "referred", "referred", "refers", "referring"],
		["regret", "regretted", "regretted", "regrets", "regretting"],
		["regrind", "reground", "reground", "regrinds", "regrinding"],
		["regrow", "regrew", "regrown", "regrows", "regrowing"],
		["rehang", "rehung", "rehung", "rehangs", "rehanging"],
		["rehear", "reheard", "reheard", "rehears", "rehearing"],
		["reknit", "reknit", "reknit", "reknits", "reknitting"],
		["relax", "relaxed", "relaxed", "relaxes", "relaxing"],
		["relay", "relaid", "relaid", "relays", "relaying"],
		["remake", "remade", "remade", "remakes", "remaking"],
		["remit", "remited", "remited", "remits", "remiting"],
		["rend", "rent", "rent", "rends", "rending"],
		["repay", "repaid", "repaid", "repays", "repaying"],
		["reread", "reread", "reread", "rereads", "rereading"],
		["rerun", "reran", "rerun", "reruns", "rerunning"],
		["resell", "resold", "resold", "resells", "reselling"],
		["resend", "resent", "resent", "resends", "resending"],
		["reset", "reset", "reset", "resets", "resetting"],
		["retake", "retook", "retaken", "retakes", "retaking"],
		["reteach", "retaught", "retaught", "reteaches", "reteaching"],
		["retell", "retold", "retold", "retells", "retelling"],
		["rethink", "rethought", "rethought", "rethinks", "rethinking"],
		["retread", "retread", "retread", "retreads", "retreading"],
		["retreat", "retreat", "retreat", "retreats", "retreating"],
		["retrofit", "retrofit", "retrofit", "retrofits", "retrofitting"],
		["retroflex", "retroflexed", "retroflexed", "retroflexes", "retroflexing"],
		["retroflex", "retroflexed", "retroflexed", "retroflexes", "retroflexing"],
		["revel", "revelled", "revelled", "revels", "revelling"],
		["rewind", "rewound", "rewound", "rewinds", "rewinding"],
		["rib", "ribbed", "ribbed", "ribs", "ribbing"],
		["ricochet", "ricochetted", "ricochetted", "ricochets", "ricochetting"],
		["rid", "rid", "rid", "rids", "ridding"],
		["ride", "rode", "ridden", "rides", "riding"],
		["ring", "rang", "rung", "rings", "ringing"],
		["rise", "rose", "risen", "rises", "rising"],
		["rival", "rivalled", "rivalled", "rivals", "rivalling"],
		["rivet", "rivetted", "rivetted", "rivets", "rivetting"],
		["rocket", "rocketted", "rocketted", "rockets", "rocketting"],
		["run", "ran", "run", "runs", "running"],
		["sand-cast", "sand-cast", "sand-cast", "sand-casts", "sand-casting"],
		["saw", "sawed", "sawn", "saws", "sawing"],
		["say", "said", "said", "says", "saying"],
		["scar", "scarred", "scarred", "scars", "scarring"],
		["see", "saw", "seen", "sees", "seeing"],
		["seek", "sought", "sought", "seeks", "seeking"],
		["sell", "sold", "sold", "sells", "selling"],
		["send", "sent", "sent", "sends", "sending"],
		["set", "set", "set", "sets", "setting"],
		["sew", "sewed", "sewn", "sews", "sewing"],
		["sex", "sexed", "sexed", "sexes", "sexing"],
		["shake", "shook", "shaken", "shakes", "shaking"],
		["shall", "should", "should", "shall", "shall"],
		["shave", "shove", "shaven", "shaves", "shaving"],
		["shear", "shore", "shorn", "shears", "shearing"],
		["shed", "shed", "shed", "sheds", "shedding"],
		["shine", "shone", "shone", "shines", "shining"],
		["shit", "shit", "shit", "shits", "shitting"],
		["shoe", "shod", "shod", "shoes", "shoeing"],
		["shoot", "shot", "shot", "shoots", "shooting"],
		["show", "showed", "shown", "shows", "showing"],
		["shrink", "shrank", "shrunk", "shrinks", "shrinking"],
		["shrivel", "shrivelled", "shrivelled", "shrivels", "shrivelling"],
		["shut", "shut", "shut", "shuts", "shutting"],
		["sidestep", "sidesteped", "sidesteped", "sidesteps", "sidesteping"],
		["signal", "signaled", "signaled", "signals", "signaling"],
		["sing", "sang", "sung", "sings", "singing"],
		["sink", "sank", "sunk", "sinks", "sinking"],
		["sit", "sat", "sat", "sits", "sitting"],
		["skid", "skidded", "skidded", "skids", "skidding"],
		["slay", "slew", "slain", "slays", "slaying"],
		["sleep", "slept", "slept", "sleeps", "sleeping"],
		["slide", "slid", "slid", "slides", "sliding"],
		["slide", "slid", "slide", "slides", "sliding"],
		["sling", "slung", "slung", "slings", "slinging"],
		["slink", "slunk", "slunk", "slinks", "slinking"],
		["slit", "slit", "slit", "slits", "slitting"],
		["slur", "slurred", "slurred", "slurs", "slurring"],
		["smell", "smelt", "smelt", "smells", "smelling"],
		["smite", "smote", "smitten", "smites", "smiting"],
		["sneak", "snuck", "snuck", "sneaks", "sneaking"],
		["speak", "spoke", "spoken", "speaks", "speaking"],
		["speed", "sped", "sped", "speeds", "speeding"],
		["spell", "spelt", "spelt", "spells", "spelling"],
		["spend", "spent", "spent", "spends", "spending"],
		["spill", "spilt", "spilt", "spills", "spilling"],
		["spin", "span", "spun", "spins", "spinning"],
		["spin", "spun", "spun", "spins", "spinning"],
		["spiral", "spiraled", "spiraled", "spirals", "spiraling"],
		["spit", "spat", "spat", "spits", "spitting"],
		["spit", "spit", "spit", "spits", "spitting"],
		["split", "split", "split", "splits", "splitting"],
		["spoil", "spoilt", "spoilt", "spoils", "spoiling"],
		["spread", "spread", "spread", "spreads", "spreading"],
		["spring", "sprang", "sprung", "springs", "springing"],
		["spur", "spurred", "spurred", "spurs", "spurring"],
		["squat", "squatted", "squatted", "squats", "squatting"],
		["stand", "stood", "stood", "stands", "standing"],
		["steal", "stole", "stolen", "steals", "stealing"],
		["stem", "stemmed", "stemmed", "stems", "stemming"],
		["stick", "stuck", "stuck", "sticks", "sticking"],
		["sting", "stung", "stung", "stings", "stinging"],
		["stink", "stank", "stunk", "stinks", "stinking"],
		["stop", "stopped", "stopped", "stops", "stopping"],
		["strew", "strewed", "strewn", "strews", "strewing"],
		["stride", "strode", "stridden", "strides", "striding"],
		["strike", "struck", "stricken", "strikes", "striking"],
		["strike", "struck", "struck", "strikes", "striking"],
		["string", "strung", "strung", "strings", "stringing"],
		["strive", "strove", "striven", "strives", "striving"],
		["stymie", "stymied", "stymied", "stymies", "stymieing"],
		["stymy", "stymied", "stymied", "stymies", "stymieing"],
		["sublet", "sublet", "sublet", "sublets", "subletting"],
		["submit", "submitted", "submitted", "submits", "submitting"],
		["suds", "sudsed", "sudsed", "sudses", "sudsing"],
		["summon", "summoned", "summoned", "summons", "summoning"],
		["swear", "swore", "sworn", "swears", "swearing"],
		["sweat", "sweat", "sweat", "sweats", "sweating"],
		["sweep", "swept", "swept", "sweeps", "sweeping"],
		["swell", "swelled", "swollen", "swells", "swelling"],
		["swim", "swam", "swum", "swims", "swimming"],
		["swing", "swung", "swung", "swings", "swinging"],
		["tag", "tagged", "tagged", "tags", "tagging"],
		["tailor-make", "tailor-made", "tailor-made", "tailor-makes", "tailor-making"],
		["take", "took", "taken", "takes", "taking"],
		["tan", "tanned", "tanned", "tans", "tanning"],
		["tap", "tapped", "tapped", "taps", "tapping"],
		["target", "targetted", "targetted", "targets", "targetting"],
		["tat", "tatted", "tatted", "tats", "tatting"],
		["tax", "taxed", "taxed", "taxes", "taxing"],
		["teach", "taught", "taught", "teaches", "teaching"],
		["tear", "tore", "torn", "tears", "tearing"],
		["telefax", "telefaxed", "telefaxed", "telefaxes", "telefaxing"],
		["tell", "told", "told", "tells", "telling"],
		["test-drive", "test-drove", "test-driven", "test-drives", "test-driving"],
		["test-fly", "test-flew", "test-flown", "test-flies", "test-flying"],
		["think", "thought", "thought", "thinks", "thinking"],
		["thrive", "throve", "thriven", "thrives", "thriving"],
		["throw", "threw", "thrown", "throws", "throwing"],
		["thrust", "thrust", "thrust", "thrusts", "thrusting"],
		["ticket", "ticketted", "ticketted", "tickets", "ticketting"],
		["tip", "tipped", "tipped", "tips", "tipping"],
		["toe", "toed", "toed", "toes", "toeing"],
		["tog", "togged", "togged", "togs", "toging"],
		["trammel", "trammelled", "trammelled", "trammels", "trammelling"],
		["transfer", "transferred", "transferred", "transfers", "transferring"],
		["transfix", "transfixed", "transfixed", "transfixes", "transfixing"],
		["travel", "travelled", "travelled", "travels", "travelling"],
		["tread", "trod", "trodden", "treads", "treading"],
		["tug", "tuged", "tuged", "tugs", "tuging"],
		["tunnel", "tunnelled", "tunnelled", "tunnels", "tunnelling"],
		["twit", "twitted", "twitted", "twits", "twitting"],
		["typecast", "typecast", "typecast", "typecasts", "typecasting"],
		["typeset", "typeset", "typeset", "typesets", "typesetting"],
		["typewrite", "typewrote", "typewritten", "typewrites", "typewriting"],
		["unbend", "unbent", "unbent", "unbends", "unbending"],
		["unbind", "unbound", "unbound", "unbinds", "unbinding"],
		["unbosom", "unbosommed", "unbosommed", "unbosoms", "unbosomming"],
		["unclothe", "unclad", "unclad", "unclothes", "unclothing"],
		["underbid", "underbid", "underbid", "underbids", "underbidding"],
		["undercut", "undercut", "undercut", "undercuts", "undercutting"],
		["underfeed", "underfed", "underfed", "underfeeds", "underfeeding"],
		["undergo", "underwent", "undergone", "undergoes", "undergoing"],
		["underlie", "underlay", "underlain", "underlies", "underlaying"],
		["undersell", "undersold", "undersold", "undersells", "underselling"],
		["understand", "understood", "understood", "understands", "understanding"],
		["undertake", "undertook", "undertaken", "undertakes", "undertaking"],
		["underwrite", "underwrote", "underwritten", "underwrites", "underwriting"],
		["undo", "undid", "undone", "undoes", "undoing"],
		["unfit", "unfited", "unfited", "unfits", "unfiting"],
		["unfreeze", "unfroze", "unfrozen", "unfreezes", "unfreezing"],
		["unknit", "unknit", "unknit", "unknits", "unknitting"],
		["unlax", "unlaxed", "unlaxed", "unlaxes", "unlaxing"],
		["unmake", "unmade", "unmade", "unmakes", "unmaking"],
		["unravel", "unravelled", "unravelled", "unravels", "unravelling"],
		["unsay", "unsaid", "unsaid", "unsays", "unsaying"],
		["unsex", "unsexed", "unsexed", "unsexes", "unsexing"],
		["unwind", "unwound", "unwound", "unwinds", "unwinding"],
		["uphold", "upheld", "upheld", "upholds", "upholding"],
		["upset", "upset", "upset", "upsets", "upsetting"],
		["vex", "vexed", "vexed", "vexes", "vexing"],
		["wake", "woke", "woken", "wakes", "waking"],
		["wallop", "walloped", "walloped", "wallops", "walloping"],
		["wax", "waxed", "waxed", "waxes", "waxing"],
		["waylay", "waylaid", "waylaid", "waylays", "waylaying"],
		["wear", "wore", "worn", "wears", "wearing"],
		["weave", "wove", "woven", "weaves", "weaving"],
		["web", "webbed", "webbed", "webs", "webbing"],
		["wed", "wed", "wed", "weds", "wedding"],
		["weep", "wept", "wept", "weeps", "weeping"],
		["wend", "went", "went", "wends", "wending"],
		["wet", "wet", "wet", "wets", "wetting"],
		["whet", "whetted", "whetted", "whets", "whetting"],
		["will", "would", "would", "will", "willing"],
		["win", "won", "won", "wins", "winning"],
		["wind", "wound", "wound", "winds", "winding"],
		["withdraw", "withdrew", "withdrawn", "withdraws", "withdrawing"],
		["withhold", "withheld", "withheld", "withholds", "withholding"],
		["withstand", "withstood", "withstood", "withstands", "withstanding"],
		["worship", "worshiped", "worshiped", "worships", "worshiping"],
		["wring", "wrung", "wrung", "wrings", "wringing"],
		["write", "wrote", "written", "writes", "writing"],
		["xerox", "xeroxed", "xeroxed", "xeroxes", "xeroxing"],
		["yak", "yakked", "yakked", "yaks", "yakking"],
		["yen", "yenned", "yenned", "yens", "yenning"],
		["zinc", "zincked", "zincked", "zincs", "zincking"]
	];
	var a = ["abandon", "abase", "abash", "abate", "abbreviate", "abdicate", "abduct", "abjure", "abnegate", "abominate", "abound", "abrade", "abridge", "abscond", "absent", "absolve", "absorb", "abstain", "abstract", "abuse", "abut", "accede", "accelerate", "accent", "accentuate", "accept", "acclaim", "accommodate", "accompany", "accomplish", "accord", "accost", "account", "accouter", "accredit", "accrue", "accumulate", "accuse", "accustom", "acerbate", "ache", "achieve", "acidify", "acknowledge", "acquaint", "acquiesce", "acquire", "act", "action", "activate", "actualize", "actuate", "adapt", "add", "addict", "addle", "address", "adduce", "adhere", "adjoin", "adjourn", "adjudge", "adjudicate", "adjure", "adjust", "administer", "administrate", "admire", "admonish", "adopt", "adorn", "adulterate", "adumbrate", "advance", "adventure", "advert", "advertise", "advise", "advocate", "aerate", "affect", "affiance", "affiliate", "affirm", "afflict", "afford", "afforest", "affront", "age", "aggrandize", "aggravate", "aggregate", "aggrieve", "agitate", "agnise", "agnize", "agonise", "agonize", "agree", "aid", "ail", "aim", "air", "airlift", "alarm", "alert", "alien", "alienate", "align", "aliment", "allay", "allege", "alleviate", "allocate", "allot", "allow", "alloy", "allude", "allure", "alter", "alternate", "amalgamate", "amass", "amaze", "amble", "ambuscade", "ambush", "ameliorate", "amend", "amount", "amplify", "amuse", "analyse", "analyze", "anathematize", "anatomize", "anchor", "angle", "anguish", "animadvert", "animate", "anneal", "annihilate", "annotate", "announce", "annoy", "annul", "annunciate", "anoint", "answer", "antagonize", "antedate", "anticipate", "antiquate", "antique", "ape", "apologise", "apologize", "apostatise", "apostatize", "appal", "appall", "apparel", "appeal", "appear", "appease", "append", "appertain", "applaud", "apply", "appoint", "apportion", "appraise", "appreciate", "apprehend", "apprise", "approach", "appropriate", "approve", "approximate", "arbitrate", "arc", "arch", "argue", "arm", "armor", "arouse", "arrange", "array", "arrest", "arrive", "arrogate", "articulate", "ascend", "ascertain", "ascribe", "ask", "asphyxiate", "assail", "assault", "assay", "assemble", "assent", "assert", "assess", "asseverate", "assign", "assimilate", "assist", "associate", "assort", "assuage", "assume", "assure", "asterisk", "astonish", "astound", "atom-bomb", "atomize", "atone", "attach", "attack", "attain", "attempt", "attend", "attenuate", "attest", "attire", "attract", "attribute", "auction", "auctioneer", "audit", "augur", "authorize", "autograph", "avail", "avenge", "avert", "avoid", "avouch", "avow", "await", "awaken", "awaken", "award", "baa", "babble", "baby", "baby-sit", "back", "backfire", "background", "backlash", "backpack", "badger", "badmouth", "baffle", "bag", "bait", "bake", "balance", "balk", "balloon", "bamboozle", "ban", "band", "bandage", "bang", "banish", "bank", "bankrupt", "banquet", "banter", "baptise", "baptize", "bar", "barbarise", "barbarize", "bard", "barde", "bare", "barf", "bargain", "bark", "barrack", "barrage", "barricade", "base", "bash", "bask", "baste", "batten", "batter", "battle", "baulk", "bawl", "bay", "beak", "beam", "beatify", "beautify", "becalm", "beckon", "becloud", "bedamn", "bedaub", "bedaze", "bedazzle", "bedeck", "bedevil", "bedevil", "beef", "beep", "beetle", "befit", "befog", "befoul", "befuddle", "beg", "beggar", "begrime", "begrudge", "beguile", "behave", "bejewel", "belabor", "belch", "beleaguer", "belie", "believe", "belittle", "bellow", "bellyache", "belong", "bemire", "bemoan", "bemuse", "benumb", "bequeath", "berth", "beseem", "besiege", "besmear", "besmirch", "besot", "bespatter", "best", "bestir", "bestow", "betide", "betoken", "betoken", "betray", "betroth", "better", "bevel", "bevel", "bewail", "beware", "bewhisker", "bewilder", "bewitch", "bicker", "bicycle", "bike", "bilk", "bill", "billet", "billow", "binge", "bird", "birdlime", "birdwatch", "bitch", "blab", "blabber", "black", "blackball", "blacken", "blacken", "blackguard", "blackjack", "blackmail", "blame", "blanch", "blandish", "blare", "blarney", "blaspheme", "blast", "blather", "bleach", "blear", "bleat", "blemish", "blench", "blend", "bless", "blight", "blind", "blink", "blister", "blob", "block", "blockade", "bloom", "blossom", "blot", "blubber", "bludgeon", "blueprint", "blunder", "blunt", "blush", "bluster", "board", "boast", "bob", "bobble", "bode", "body", "boil", "bolster", "bolt", "bomb", "bombard", "bond", "bone", "boo", "book", "boom", "boost", "boot", "bop", "border", "borrow", "bosom", "boss", "botch", "bother", "bottom", "bounce", "bow", "bowdlerize", "bower", "brace", "brag", "braid", "branch", "brand", "brandish", "brave", "brawl", "bray", "breach", "breast", "breastfeed", "breathe", "bribe", "brighten", "brisk", "bristle", "broach", "broaden", "broil", "bronze", "brood", "brook", "broom", "brown", "browse", "bruise", "bruit", "brush", "bubble", "buck", "buckle", "budge", "buff", "buffer", "buffet", "bug", "bugger", "bulge", "bulk", "bully", "bullyrag", "bum", "bumble", "bump", "bunch", "bunco", "bundle", "bung", "bungle", "bunk", "bunt", "burble", "burden", "burlesque", "burnish", "burp", "burrow", "burthen", "burthen", "bury", "bushel", "bushwhack", "bustle", "busy", "butcher", "butt", "buttonhole", "buzz", "bypass", "cab", "cabal", "cabbage", "cable", "cache", "cadge", "cajole", "cake", "calculate", "calibrate", "call", "calm", "calumniate", "camp", "campaign", "canal", "canalise", "canalize", "cancel", "candy", "cane", "canonise", "canonize", "cant", "cantillate", "canton", "canvass", "cap", "caparison", "capsize", "capsulate", "capsule", "capsulise", "capsulize", "captivate", "capture", "card", "care", "careen", "caress", "caricature", "cark", "carouse", "carp", "carry", "cart", "carve", "case", "cash", "castigate", "castrate", "cat", "catalog", "catalogue", "catapult", "catechise", "catechize", "cater", "caterwaul", "catnap", "cause", "cauterise", "cauterize", "caution", "cave", "cavil", "cavort", "cease", "cede", "celebrate", "cense", "censor", "censure", "center", "centralise", "centralize", "centre", "cerebrate", "certify", "chafe", "chaff", "chaffer", "chagrin", "chair", "chairman", "challenge", "chamfer", "champ", "champion", "chance", "change", "channel", "channel-surf", "channelise", "channelize", "chant", "char", "characterise", "characterize", "charge", "charm", "chart", "charter", "chase", "chasse", "chasten", "chastise", "chat", "chatter", "cheapen", "cheapen", "cheat", "check", "checker", "checkmate", "cheep", "cheer", "chequer", "chevvy", "chevy", "chew", "chicane", "chill", "chink", "chip", "chirp", "chirrup", "chisel", "chitter", "chivvy", "chivy", "choir", "choke", "chomp", "chop", "chord", "chouse", "christen", "christianise", "christianize", "chrome", "chuck", "chuff", "chunk", "churn", "chute", "cinch", "cipher", "circle", "circularise", "circularize", "circulate", "circumnavigate", "circumscribe", "circumvent", "circumvolve", "cite", "civilise", "civilize", "clack", "claim", "clamber", "clamor", "clamour", "clang", "clangor", "clangour", "clap", "clarify", "clash", "clasp", "class", "classify", "clatter", "claxon", "clean", "cleanse", "clear", "clench", "clew", "click", "climb", "clinch", "clink", "clip", "cloak", "clobber", "clock", "clog", "clomp", "clop", "close", "closure", "clot", "cloture", "cloud", "clown", "cloy", "club", "cluck", "clue", "clump", "clunk", "cluster", "co-occur", "co-operate", "coach", "coagulate", "coal", "coalesce", "coat", "cock", "cocker", "cockle", "cod", "coddle", "code", "coerce", "coggle", "cogitate", "cognise", "cognize", "cohere", "coif", "coiffe", "coiffure", "coil", "coin", "coincide", "cold-shoulder", "coldcock", "collaborate", "collapse", "collar", "collect", "collide", "colligate", "collimate", "collocate", "collude", "colly", "colonise", "colonize", "color", "colorise", "colorize", "colour", "colourise", "colourize", "comb", "combat", "combine", "combust", "comfit", "comfort", "command", "commandeer", "commemorate", "commence", "commend", "comment", "commercialise", "commercialize", "comminate", "commingle", "comminute", "commiserate", "commit", "commove", "commune", "communicate", "commute", "compact", "companion", "company", "compare", "compass", "compel", "compensate", "compete", "compile", "complain", "complete", "complexify", "complicate", "compliment", "complot", "comply", "comport", "compose", "compound", "comprehend", "compress", "comprise", "compute", "con", "conceal", "concede", "conceive", "concentrate", "conceptualize", "concern", "conciliate", "conclude", "concur", "condemn", "condense", "condescend", "condition", "condone", "conduce", "conduct", "confab", "confabulate", "confection", "confess", "confide", "confine", "confirm", "confiscate", "conflate", "conflict", "conform", "confound", "confront", "confuse", "confute", "congeal", "congest", "conglomerate", "congratulate", "conjecture", "conjoin", "conjure", "conk", "connect", "connive", "connote", "conquer", "consecrate", "consent", "conserve", "consider", "consign", "consist", "console", "consort", "conspire", "constipate", "constitute", "constrain", "constrict", "construct", "construe", "consult", "consume", "contact", "contain", "contaminate", "contemn", "contemplate", "contend", "contest", "continue", "contort", "contract", "contradict", "contrast", "contravene", "contribute", "contrive", "control", "controvert", "contuse", "convalesce", "convene", "converge", "converse", "convert", "convey", "convict", "convince", "convoke", "convolute", "convolve", "convulse", "coo", "cooccur", "cook", "cool", "cooperate", "coordinate", "cop", "copulate", "copy", "corkscrew", "corner", "coronate", "corrade", "correct", "correspond", "corroborate", "corrode", "corrupt", "coruscate", "cosset", "couch", "cough", "counsel", "count", "countenance", "counter", "counteract", "counterbalance", "counterfeit", "countermand", "counterpoint", "counterpoise", "countervail", "counterweight", "couple", "course", "court", "cover", "cow", "cower", "cozen", "cozen", "crab", "crack", "crackle", "cram", "cramp", "cranch", "crank", "crap", "crape", "crash", "craunch", "crave", "crawfish", "crawl", "craze", "creak", "cream", "crease", "create", "credit", "crepe", "crepitate", "crest", "criminalise", "criminalize", "criminate", "crimp", "crimson", "cringe", "crinkle", "cripple", "crisp", "crispen", "crispen", "criticise", "criticize", "critique", "croak", "crochet", "cronk", "crook", "crop", "cross", "cross-file", "crouch", "crow", "crowd", "crown", "crucify", "crumble", "crump", "crumple", "crunch", "crusade", "crush", "cry", "crystallize", "cube", "cuddle", "cudgel", "cue", "cuff", "cull", "culminate", "cultivate", "cumber", "cumulate", "cup", "curb", "cure", "curl", "curry", "curse", "curtail", "curtsey", "curtsy", "curve", "cushion", "custom-make", "customise", "customize", "cycle", "cypher", "dab", "dabble", "dally", "damage", "damn", "damp", "dampen", "dampen", "dance", "dangle", "dapple", "dare", "dart", "dash", "daub", "daunt", "dawdle", "dawn", "daydream", "daze", "dazzle", "de-escalate", "deaden", "deaf", "deafen", "deafen", "debar", "debark", "debase", "debate", "debauch", "debilitate", "debone", "debunk", "decamp", "decant", "decay", "decease", "deceive", "decelerate", "decide", "decimate", "decipher", "deck", "declaim", "declare", "decline", "decode", "decompose", "decompress", "decorate", "decouple", "decrease", "decree", "decriminalize", "decry", "decrypt", "dedicate", "deduce", "deduct", "deem", "deepen", "deepen", "deface", "defalcate", "defame", "defeat", "defecate", "defect", "defend", "defer", "defile", "define", "deflect", "deflower", "deform", "defraud", "defy", "degenerate", "degrade", "dehydrate", "deign", "deject", "delay", "delegate", "delete", "deliberate", "delight", "delimit", "delimitate", "delineate", "deliver", "delude", "deluge", "delve", "demand", "demarcate", "demilitarize", "demo", "demolish", "demonstrate", "demoralise", "demoralize", "demote", "demur", "denigrate", "denominate", "denote", "denounce", "dent", "denudate", "denude", "deny", "depart", "depend", "depict", "deplete", "deplore", "depopulate", "deport", "depose", "deposit", "deprave", "deprecate", "depreciate", "depress", "depressurise", "depressurize", "deprive", "depute", "deputise", "deputize", "deracinate", "derail", "derange", "derive", "derogate", "desacralize", "descale", "descant", "descend", "describe", "descry", "desecrate", "desegregate", "desert", "deserve", "desexualise", "desexualize", "desiccate", "design", "designate", "desire", "desist", "desolate", "despatch", "despise", "despoil", "destine", "destroy", "destruct", "detach", "detain", "detect", "deter", "deteriorate", "determine", "detest", "dethaw", "detonate", "detusk", "devaluate", "devalue", "deviate", "devil", "devise", "devolve", "devote", "devour", "diagnose", "diagram", "dice", "dicker", "dictate", "didder", "diddle", "die", "differ", "differentiate", "diffuse", "digest", "dignify", "digress", "dike", "dilapidate", "dilate", "dilute", "diminish", "din", "dine", "ding", "dingdong", "dinge", "direct", "dirty", "disable", "disaccord", "disadvantage", "disaffect", "disagree", "disallow", "disappear", "disapprove", "disarm", "disarray", "disarticulate", "disassemble", "disassociate", "disband", "disbelieve", "disburden", "discard", "discase", "discern", "discerp", "discharge", "discipline", "disclose", "discolor", "discombobulate", "discomfit", "discommode", "discompose", "disconcert", "disconnect", "discontinue", "discord", "discount", "discourage", "discourse", "discover", "discredit", "discriminate", "disdain", "disembark", "disembarrass", "disembowel", "disembroil", "disenable", "disenchant", "disencumber", "disenfranchise", "disengage", "disentangle", "disesteem", "disfavor", "disfavour", "disfigure", "disfranchise", "disgorge", "disgrace", "disguise", "disgust", "dish", "dishevel", "dishonor", "dishonour", "disillusion", "disincline", "disinherit", "disintegrate", "disinter", "disinvest", "disinvolve", "disjoin", "disjoint", "disk", "dislocate", "dislodge", "dismantle", "dismay", "dismember", "dismiss", "dismount", "disobey", "disoblige", "disorder", "disorganise", "disorganize", "disown", "disparage", "dispatch", "dispel", "dispense", "disperse", "dispirit", "displace", "display", "displume", "disport", "dispose", "disprove", "dispute", "disqualify", "disquiet", "disregard", "disrespect", "disrobe", "disrupt", "diss", "dissect", "dissemble", "disseminate", "dissent", "dissever", "dissipate", "dissociate", "dissolve", "dissuade", "distance", "distend", "distil", "distill", "distinguish", "distort", "distract", "distress", "distribute", "district", "distrust", "disturb", "disunite", "disuse", "ditch", "dither", "divagate", "dive", "diverge", "diversify", "divert", "divest", "divide", "divorce", "divulge", "dj", "dock", "doctor", "dodder", "dodge", "dog", "dogmatise", "dogmatize", "dogsled", "domesticate", "domesticise", "domesticize", "domicile", "domiciliate", "dominate", "domineer", "don", "donate", "dong", "doom", "dose", "doss", "dot", "double", "douse", "dower", "down", "download", "downplay", "dowse", "doze", "draft", "drag", "dragoon", "drain", "dramatise", "dramatize", "drape", "draught", "dread", "dream", "dredge", "drench", "dress", "dribble", "drift", "drill", "drip", "drivel", "drizzle", "drool", "droop", "drop", "drown", "drowse", "drub", "drudge", "drug", "drum", "dry", "dub", "duck", "dulcify", "dulcorate", "dull", "dumbfound", "dump", "dun", "dunk", "dupe", "duplicate", "dust", "dwarf", "dyke", "e-mail", "earmark", "earn", "ease", "echo", "eclipse", "economise", "economize", "eddy", "edge", "edify", "edit", "educate", "educe", "edulcorate", "efface", "effect", "effectuate", "effervesce", "effloresce", "egest", "egress", "eject", "elaborate", "elapse", "elate", "electrify", "electrocute", "elevate", "elicit", "eliminate", "elongate", "elucidate", "elude", "emaciate", "email", "emanate", "emancipate", "emasculate", "embark", "embarrass", "embed", "embellish", "embezzle", "embitter", "emblazon", "embody", "embolden", "emboss", "embower", "embrace", "embrangle", "embrocate", "embroider", "embroil", "embrown", "emerge", "emit", "empale", "empanel", "empathise", "empathize", "emphasise", "emphasize", "employ", "empower", "empty", "empurple", "enact", "enamor", "enamour", "encamp", "encapsulate", "encase", "enchant", "encipher", "encircle", "enclose", "enclothe", "encompass", "encounter", "encourage", "encroach", "encrust", "encrypt", "encumber", "end", "endeavor", "endeavour", "endorse", "endow", "endue", "endure", "energise", "energize", "enervate", "enfeeble", "enfold", "enforce", "enfranchise", "engage", "engender", "engild", "engineer", "englut", "engorge", "engraft", "engrave", "engross", "engulf", "enhance", "enjoin", "enjoy", "enkindle", "enlace", "enlarge", "enlighten", "enlist", "enliven", "enliven", "enmesh", "ennoble", "enounce", "enquire", "enrapture", "enrol", "enroll", "ensconce", "enshrine", "enshroud", "ensnare", "ensnarl", "ensue", "ensure", "entail", "entangle", "enter", "entertain", "enthral", "enthrall", "enthrone", "entice", "entitle", "entomb", "entrance", "entrap", "entreat", "entrench", "entrust", "entwine", "enumerate", "enunciate", "envelop", "envenom", "environ", "envisage", "envision", "envy", "enwrap", "epitomise", "epitomize", "equal", "equalise", "equalize", "equate", "equilibrate", "equilibrise", "equilibrize", "equip", "eradicate", "erase", "erect", "erode", "err", "eruct", "erupt", "escalate", "escape", "eschew", "escort", "espouse", "espy", "essay", "establish", "esteem", "estimate", "estrange", "etch", "eulogize", "evacuate", "evade", "evaluate", "evaporate", "even", "even", "evidence", "evince", "eviscerate", "evoke", "evolve", "exacerbate", "exact", "exaggerate", "exalt", "examine", "exasperate", "excavate", "exceed", "excel", "except", "excerpt", "exchange", "excise", "excite", "exclaim", "exclude", "excogitate", "excommunicate", "excoriate", "excrete", "excruciate", "exculpate", "excuse", "execrate", "execute", "exemplify", "exempt", "exercise", "exert", "exhale", "exhaust", "exhibit", "exhilarate", "exhort", "exhume", "exile", "exist", "exit", "exonerate", "expand", "expatiate", "expatriate", "expect", "expedite", "expel", "expend", "experience", "expiate", "expire", "explain", "explicate", "explode", "exploit", "explore", "expose", "exposit", "expound", "express", "expunge", "expurgate", "extemporize", "extend", "extenuate", "exterminate", "externalize", "extinguish", "extirpate", "extort", "extract", "extradite", "extrapolate", "extricate", "exude", "exult", "eyeball", "fabricate", "face", "face-lift", "facilitate", "facsimile", "fade", "fag", "faggot", "fagot", "fail", "faint", "fake", "falsify", "falter", "familiarise", "familiarize", "famish", "fan", "fancify", "fancy", "fantasise", "fantasize", "fantasy", "farce", "fare", "farm", "farrow", "fascinate", "fashion", "fasten", "fat", "fate", "father", "fathom", "fatigue", "fatten", "fault", "favor", "favour", "fawn", "faze", "fear", "feast", "feather", "featherbed", "feature", "fecundate", "fee", "feign", "felicitate", "fellate", "fence", "fend", "ferment", "ferry", "fertilise", "fertilize", "fester", "festinate", "fetch", "fete", "fetter", "fictionalise", "fictionalize", "fiddle", "figure", "filch", "file", "filet", "fill", "fillet", "film", "filter", "filtrate", "finagle", "finalise", "finalize", "fine", "fine-tune", "finetune", "finger", "finish", "fink", "fire", "firm", "fish", "fit", "fixate", "fizz", "flag", "flagellate", "flail", "flame", "flap", "flare", "flash", "flatten", "flatter", "flaunt", "flavor", "flavour", "flaw", "fleck", "fledge", "fleece", "fleet", "flick", "flicker", "flight", "flinch", "flip", "flip-flop", "flirt", "float", "flock", "flog", "flood", "floor", "flop", "flounder", "flourish", "flout", "flow", "flower", "flub", "fluctuate", "fluff", "flunk", "flurry", "flush", "flutter", "foam", "fob", "fog", "foil", "fold", "foliate", "follow", "foment", "fondle", "fool", "foot", "footnote", "forage", "foray", "force", "forebode", "foreclose", "foreground", "foreshadow", "foreshorten", "forest", "forestall", "forewarn", "forfeit", "forfend", "forgather", "forge", "fork", "form", "formalize", "format", "formulate", "fortify", "foster", "foul", "found", "founder", "fraction", "fracture", "frame", "frank", "fraternize", "fray", "frazzle", "free", "free-base", "freewheel", "frequent", "freshen", "freshen", "fright", "frighten", "frisk", "fritter", "frizz", "frizzle", "front", "frost", "froth", "frown", "fructify", "frustrate", "fry", "fuddle", "fudge", "fuel", "fulfil", "fulfill", "full", "fulminate", "fumble", "fume", "fumigate", "function", "funk", "furbish", "furcate", "furnish", "furrow", "further", "fuse", "fustigate", "gab", "gabble", "gag", "gain", "gall", "gallop", "galvanise", "galvanize", "gamble", "gambol", "gangrene", "gaol", "gap", "gape", "garb", "garble", "gargle", "garment", "garner", "garnish", "garnishee", "garotte", "garrote", "garrotte", "gasconade", "gash", "gasify", "gasp", "gather", "gauge", "gawk", "gawp", "gaze", "gazump", "gear", "gel", "geld", "geminate", "generalise", "generalize", "generate", "gentle", "genuflect", "germinate", "gestate", "gesticulate", "gesture", "ghost", "ghostwrite", "gibber", "gibbet", "gibe", "gift", "gild", "gimp", "gird", "girdle", "girth", "gladden", "glamour", "glance", "glare", "glass", "glaze", "gleam", "glean", "glimmer", "glint", "glisten", "glitter", "gloat", "glom", "glorify", "gloss", "glow", "glower", "glue", "glut", "gnarl", "gnaw", "goad", "gobble", "goggle", "goldbrick", "goof-proof", "goofproof", "google", "gorge", "gormandise", "gormandize", "gouge", "gourmandize", "govern", "grab", "grace", "grade", "graduate", "graft", "grain", "grant", "granulate", "graph", "grapple", "grasp", "grass", "grate", "gratify", "grave", "gravel", "gray", "graze", "greet", "grey", "grieve", "grime", "grip", "gripe", "grizzle", "groan", "grok", "groom", "groove", "grope", "grouch", "group", "grouse", "grovel", "growl", "grub", "grudge", "grumble", "gruntle", "guarantee", "guard", "guess", "guggle", "guide", "gull", "gulp", "gum", "gurgle", "gush", "guttle", "guy", "gybe", "gyrate", "habilitate", "habituate", "hack", "haggle", "hail", "hale", "hallow", "halt", "halter", "ham", "hammer", "hamper", "hand", "hand-build", "handbuild", "handcuff", "handicap", "handle", "hanker", "hap", "happen", "harass", "harbinger", "harbor", "harbour", "harden", "hark", "harken", "harken", "harm", "harmonise", "harmonize", "harness", "harp", "harrow", "harry", "harvest", "hassle", "hasten", "hatch", "hate", "haul", "haunt", "hawk", "hazard", "head", "heal", "heap", "hearken", "hearken", "hearten", "heat", "hector", "hedge", "heed", "heel", "heft", "heighten", "help", "herald", "herd", "hero-worship", "hesitate", "hie", "higgle", "highjack", "highlight", "hijack", "hike", "hinder", "hint", "hire", "hiss", "hitch", "hitchhike", "hoard", "hobble", "hock", "hoist", "holiday", "holler", "hollo", "hollow", "hone", "honk", "honor", "honour", "hoodwink", "hoof", "hook", "hoover", "hop", "hope", "hopple", "horn", "hornswoggle", "horrify", "hotfoot", "hound", "house", "houseclean", "hover", "howl", "huckster", "huddle", "hue", "huff", "hug", "hulk", "hum", "humanise", "humanize", "humble", "humiliate", "humor", "humour", "hump", "hunch", "hunger", "hunker", "hunt", "hurl", "hurry", "hurtle", "husband", "hush", "husk", "hustle", "hybridise", "hybridize", "hydroplane", "hyperbolise", "hyperbolize", "hyphen", "hyphen", "hyphenate", "hypnotise", "hypnotize", "hypothecate", "hypothesise", "hypothesize", "ice", "idealize", "ideate", "identify", "idle", "idolise", "idolize", "ignite", "ignore", "ill-treat", "ill-use", "illegalise", "illegalize", "illume", "illuminate", "illumine", "illustrate", "image", "imagine", "imbed", "imbibe", "imbrue", "imbue", "imitate", "immerse", "immingle", "immobilise", "immobilize", "immolate", "immortalise", "immortalize", "immunise", "immunize", "immure", "impact", "impair", "impale", "impanel", "impart", "impeach", "impede", "impel", "impend", "imperil", "impersonate", "impinge", "implant", "implement", "implicate", "implode", "implore", "imply", "import", "importune", "impose", "impound", "impoverish", "imprecate", "impregnate", "impress", "imprint", "improve", "improvise", "improvize", "impute", "inaugurate", "incapacitate", "incarcerate", "incarnate", "incase", "incense", "inch", "incinerate", "incise", "incite", "incline", "inclose", "include", "incommode", "inconvenience", "incorporate", "increase", "incriminate", "incrust", "incubate", "inculcate", "inculpate", "incur", "indemnify", "indent", "indenture", "indicate", "indispose", "indite", "individualise", "individualize", "indorse", "induce", "induct", "indue", "indulge", "indurate", "inebriate", "infect", "infer", "infest", "infiltrate", "inflame", "inflate", "inflect", "inflict", "influence", "inform", "infract", "infringe", "infuriate", "infuse", "ingeminate", "ingest", "ingraft", "ingrain", "ingurgitate", "inhabit", "inhale", "inherit", "inhibit", "inhume", "initialise", "initialize", "initiate", "inject", "injure", "innovate", "inoculate", "inquire", "inscribe", "inseminate", "insert", "insinuate", "insist", "insolate", "inspect", "inspire", "inspirit", "inspissate", "instal", "install", "instance", "instigate", "instil", "instill", "institute", "institutionalise", "institutionalize", "instruct", "instrument", "instrumentate", "insulate", "insult", "insure", "integrate", "intend", "intensify", "inter", "intercede", "intercept", "interchange", "intercommunicate", "interdict", "interest", "interfere", "interject", "interlace", "interlard", "interlock", "intermediate", "intermingle", "intermit", "interpenetrate", "interpolate", "interpose", "interpret", "interrelate", "interrogate", "interrupt", "intersect", "intersperse", "intertwine", "intervene", "interview", "intimate", "intonate", "intone", "intoxicate", "intrench", "intrigue", "introduce", "intromit", "intrude", "intrust", "intumesce", "inunct", "inundate", "inure", "invade", "invalid", "invalidate", "inveigh", "inveigle", "invent", "inventory", "invert", "invest", "investigate", "invigilate", "invigorate", "invite", "invoke", "involve", "irk", "iron", "irradiate", "irrigate", "irritate", "irrupt", "isolate", "issue", "itch", "itemise", "itemize", "iterate", "jab", "jabber", "jack", "jacklight", "jactitate", "jade", "jail", "jam", "jampack", "jangle", "jar", "jaunt", "jaw", "jawbone", "jeer", "jell", "jellify", "jelly", "jeopardise", "jeopardize", "jerk", "jest", "jewel", "jib", "jibe", "jiggle", "jimmy", "jingle", "jingle-jangle", "job", "jockey", "jog", "joggle", "join", "joint", "joke", "jollify", "jolly", "jolt", "josh", "jostle", "jounce", "journey", "joy", "joyride", "jubilate", "judder", "judge", "jug", "juggle", "jumble", "jump", "jump-start", "jumpstart", "junk", "junket", "junketeer", "justify", "keel", "keen", "key", "kibosh", "kick", "kidnap", "kill", "kindle", "kink", "kip", "kiss", "knap", "knead", "knell", "knife", "knight", "knock", "knot", "kotow", "kowtow", "kvetch", "label", "labialise", "labialize", "labor", "labour", "lace", "lack", "lactate", "ladder", "ladle", "lag", "lallygag", "lam", "lambast", "lambaste", "lame", "lament", "lampoon", "land", "languish", "lap", "lapidate", "lapse", "lard", "lark", "larn", "larrup", "lash", "lasso", "last", "latch", "lather", "laud", "laugh", "launch", "launder", "lave", "lavish", "laze", "leach", "leaf", "leak", "lean", "leap", "learn", "lease", "leash", "leaven", "leaven", "lecture", "leech", "leer", "legalise", "legalize", "legislate", "legitimate", "legitimatise", "legitimatize", "legitimise", "legitimize", "lenify", "lessen", "lessen", "level", "lever", "levitate", "levy", "liaise", "liberate", "librate", "licence", "license", "lick", "lie", "lift", "lighten", "like", "liken", "liken", "lime", "limit", "limn", "limp", "line", "linger", "link", "lionise", "lionize", "liquefy", "liquidate", "liquidise", "liquidize", "liquify", "list", "listen", "litigate", "live", "liven", "liven", "load", "loaf", "loan", "loathe", "lobby", "localise", "localize", "locate", "lock", "locomote", "lodge", "log", "loiter", "loll", "lollygag", "long", "look", "loom", "loop", "loose", "loosen", "loosen", "loot", "lop", "lot", "lounge", "lour", "love", "low", "lowball", "lower", "lucubrate", "luff", "lug", "lull", "lumber", "lump", "lunge", "lurch", "lure", "lurk", "lust", "luxate", "luxuriate", "macerate", "machinate", "maculate", "madden", "magnetise", "magnetize", "magnify", "mail", "maintain", "maledict", "malign", "malinger", "maltreat", "malversate", "manacle", "manage", "manducate", "maneuver", "mangle", "manifest", "manifold", "manipulate", "manoeuver", "manoeuvre", "manufacture", "manumit", "manure", "map", "mar", "march", "mark", "market", "maroon", "marry", "marshal", "marvel", "mash", "mask", "massacre", "massage", "master", "mastermind", "masticate", "mat", "match", "mate", "materialise", "materialize", "matt-up", "matte", "matter", "maturate", "mature", "maul", "maunder", "meander", "measure", "meddle", "mediate", "medicate", "medicine", "meditate", "melanise", "melanize", "meld", "meliorate", "mellow", "melt", "memorialise", "memorialize", "memorise", "memorize", "menace", "mend", "menstruate", "mensurate", "mention", "merchandise", "merge", "merit", "mesh", "mesmerise", "mesmerize", "metamorphose", "mew", "mewl", "microwave", "micturate", "migrate", "mildew", "milk", "mime", "mimic", "mince", "mind", "mingle", "minify", "minimise", "minimize", "mint", "mire", "misaddress", "misadvise", "misapply", "misapprehend", "misappropriate", "misbehave", "miscalculate", "miscall", "miscarry", "misconceive", "misconduct", "misconstrue", "misdemean", "misdirect", "misestimate", "misguide", "mishandle", "misidentify", "misinform", "misinterpret", "mislearn", "mismanage", "misname", "misplace", "mispronounce", "misrepresent", "miss", "mist", "mistreat", "mistrust", "misuse", "mitigate", "mizzle", "moan", "mob", "mobilise", "mobilize", "mock", "model", "moderate", "modernise", "modernize", "modify", "modulate", "moil", "moisten", "mold", "mold", "molder", "molest", "mollify", "mollycoddle", "molt", "monger", "monish", "monitor", "monkey", "monopolise", "monopolize", "moo", "mooch", "moon", "moor", "moot", "mop", "moralise", "moralize", "mortify", "mosey", "mother", "motion", "motivate", "motley", "motor", "motorbike", "motorcycle", "mottle", "mould", "moulder", "moult", "mount", "mouse", "mousse", "mouth", "move", "muck", "mud", "muddle", "muff", "muffle", "mulct", "multiply", "mumble", "munch", "murder", "murmur", "mush", "mussitate", "muster", "mute", "mutilate", "mutter", "muzzle", "mystify", "nab", "nag", "nail", "name", "nap", "nark", "narrate", "narrow", "naturalise", "naturalize", "nauseate", "navigate", "near", "neaten", "necessitate", "necrose", "need", "needle", "negate", "negative", "neglect", "negociate", "negotiate", "neighbor", "neighbour", "nerve", "nest", "nestle", "netmail", "nett", "nettle", "neuter", "neutralise", "neutralize", "nibble", "nick", "nickname", "nictate", "nictitate", "niggle", "nip", "nock", "nod", "nominate", "normalise", "normalize", "nose", "nosh", "note", "notice", "notify", "nourish", "nudge", "nuke", "nullify", "numb", "number", "numerate", "nurse", "nurture", "nutrify", "nuzzle", "obey", "objectify", "objurgate", "obligate", "oblige", "obliterate", "obnubilate", "obscure", "observe", "obsess", "obstruct", "obtain", "obtrude", "obturate", "obviate", "occlude", "occult", "occupy", "occur", "odorize", "odourise", "off", "offend", "offer", "officiate", "offload", "oil", "oink", "omen", "omen", "omit", "ooze", "open", "operate", "opine", "oppose", "oppress", "oppugn", "opt", "optimise", "optimize", "orb", "orbit", "orchestrate", "ordain", "order", "ordinate", "organise", "organize", "orient", "orientate", "originate", "ornament", "oscillate", "osculate", "ostracize", "oust", "outbalance", "outcry", "outdistance", "outfit", "outflank", "outlast", "outlaw", "outline", "outlive", "outmaneuver", "outmatch", "outperform", "outrage", "outrank", "outshout", "outsmart", "outstrip", "outweigh", "over-correct", "overact", "overawe", "overbalance", "overcharge", "overcloud", "overcompensate", "overdress", "overestimate", "overflow", "overhaul", "overindulge", "overload", "overlook", "overmaster", "overplay", "overpower", "overprotect", "overrate", "overreach", "overrule", "oversew", "overshadow", "overspread", "overstate", "overstep", "overstretch", "oversupply", "overtop", "overturn", "overuse", "overvalue", "overwhelm", "overwinter", "overwork", "owe", "own", "pace", "pacify", "pack", "pack", "package", "pad", "paddle", "page", "paginate", "pain", "paint", "pair", "palaver", "pale", "palisade", "pall", "palliate", "palm", "palpate", "palpitate", "pamper", "pan", "pander", "panel", "pant", "pantomime", "paper", "parachute", "parade", "parallel", "paralyse", "paralyze", "paraphrase", "parboil", "parch", "pardon", "pare", "parent", "parody", "parry", "part", "participate", "particularise", "particularize", "partition", "pass", "paste", "pasture", "pat", "patch", "patrol", "patronage", "patronise", "patronize", "patter", "pattern", "pauperise", "pauperize", "pause", "pawn", "peal", "peck", "peculate", "pedal", "peddle", "pee", "peek", "peel", "peep", "pelt", "pen", "penalise", "penalize", "penetrate", "pepper", "perceive", "perch", "percolate", "perfect", "perforate", "perform", "perfume", "perfuse", "peril", "perish", "permeate", "permute", "perpetrate", "persecute", "persevere", "persist", "personalise", "personalize", "personate", "personify", "perspire", "persuade", "pertain", "perturb", "pervade", "pervert", "pester", "pettifog", "phlebotomise", "phlebotomize", "phonate", "phone", "photocopy", "photograph", "pick", "picture", "piddle", "piece", "pierce", "piffle", "pig", "pigeonhole", "pile", "pilfer", "pillage", "pillory", "pillow", "pilot", "pimp", "pin", "pinch", "pine", "ping", "pinion", "pink", "pinpoint", "pioneer", "pip", "pipe", "pique", "pirate", "piss", "pit", "pitch", "pitchfork", "pivot", "placard", "placate", "place", "plagiarise", "plagiarize", "plague", "plain", "plait", "plan", "plane", "plank", "plant", "plash", "plaster", "plat", "play", "playact", "pleach", "plead", "please", "pleat", "pledge", "plicate", "plight", "plod", "plonk", "plop", "plot", "plough", "plow", "pluck", "plug", "plume", "plummet", "plump", "plunder", "plunge", "plunk", "ply", "pock", "pocket", "poetise", "poetize", "point", "poise", "poison", "poke", "pole", "police", "polish", "poll", "pollard", "pollute", "pommel", "ponder", "pop", "popularise", "popularize", "populate", "pore", "portend", "portion", "portray", "pose", "posit", "position", "possess", "post", "postdate", "postmark", "postpone", "postulate", "posture", "pother", "potter", "pouch", "poultice", "pounce", "pound", "pour", "pout", "powder", "powderise", "powderize", "practice", "practice", "practise", "praise", "prance", "prate", "prattle", "pray", "preach", "preachify", "precede", "precipitate", "preclude", "predate", "predetermine", "predicate", "predict", "predominate", "preempt", "preen", "preface", "prefigure", "prehend", "prejudice", "premier", "premiere", "premise", "premiss", "prepare", "preponderate", "prepossess", "presage", "prescribe", "present", "preserve", "preside", "press", "pressure", "pressurise", "pressurize", "presume", "presuppose", "pretend", "pretermit", "prettify", "prevail", "prevent", "previse", "prey", "prick", "prickle", "pride", "prime", "primp", "prink", "print", "prise", "privilege", "prize", "probe", "proceed", "process", "proclaim", "procrastinate", "procreate", "proctor", "procure", "prod", "produce", "profane", "profess", "proffer", "prognosticate", "program", "programme", "progress", "prohibit", "project", "prolong", "promenade", "promise", "promote", "prompt", "promulgate", "pronounce", "proof", "propagate", "propel", "prophesy", "propitiate", "propose", "prorogue", "proscribe", "prosecute", "prosper", "protect", "protest", "protract", "protrude", "prove", "provide", "provision", "provoke", "prowl", "prune", "pry", "psychoanalyse", "psychoanalyze", "ptyalise", "ptyalize", "publicise", "publicize", "publish", "pucker", "puddle", "puff", "puke", "pule", "pull", "pullulate", "pulsate", "pulse", "pulverise", "pulverize", "pummel", "punch", "punctuate", "punish", "punt", "pup", "purchase", "puree", "purge", "purify", "purl", "purloin", "purple", "purport", "purpose", "purpurate", "purr", "purse", "pursue", "purvey", "push", "pussyfoot", "putter", "puzzle", "quaff", "quail", "quake", "qualify", "quantify", "quarrel", "quarter", "quash", "quaver", "queer", "quell", "quench", "query", "quest", "question", "quetch", "quibble", "quicken", "quiesce", "quiet", "quieten", "quip", "quiver", "quiz", "quote", "race", "rack", "racket", "radiate", "rag", "rage", "raid", "rail", "railroad", "raiment", "rain", "raise", "rake", "rally", "ram", "ramble", "ramify", "ramp", "range", "rank", "ransack", "ransom", "rant", "rap", "rape", "rarefy", "rarify", "rase", "rat", "rate", "ratify", "rationalise", "rationalize", "rattle", "ravage", "rave", "ravel", "raven", "raven", "ravish", "ray", "raze", "razz", "re-create", "re-emerge", "re-start", "reach", "react", "readapt", "readjust", "ready", "realise", "realize", "reanimate", "reap", "reappear", "rear", "reason", "reassert", "reassign", "reassure", "reave", "reboot", "rebuff", "rebut", "recall", "recant", "recap", "recapitulate", "recede", "receipt", "receive", "recess", "recharge", "recidivate", "recite", "reckon", "reclaim", "recline", "recognise", "recognize", "recoil", "recollect", "recommend", "recompense", "reconcile", "reconnoiter", "reconnoitre", "reconstruct", "record", "recount", "recoup", "recover", "recreate", "recrudesce", "recruit", "rectify", "recumb", "recuperate", "recur", "redact", "redden", "rede", "redeem", "redress", "reduce", "reduplicate", "reek", "reel", "reelect", "reenact", "reenforce", "reestablish", "reexamine", "refashion", "referee", "reference", "refill", "refine", "refit", "reflect", "reforge", "reform", "refrain", "refresh", "refreshen", "refreshen", "refund", "refurbish", "refuse", "refute", "regain", "regale", "regard", "regenerate", "register", "regorge", "regress", "regularise", "regularize", "regulate", "regurgitate", "rehash", "rehearse", "reheel", "reign", "reimburse", "rein", "reincarnate", "reinforce", "reinstate", "reinvigorate", "reissue", "reiterate", "reject", "rejoice", "rejoin", "rejuvenate", "relapse", "relate", "release", "relegate", "relent", "relieve", "relinquish", "relish", "reload", "rely", "remain", "remand", "remark", "remediate", "remedy", "remember", "remind", "remit", "remodel", "remold", "remould", "remove", "remunerate", "render", "renegade", "renew", "renormalise", "renormalize", "renounce", "renovate", "repair", "repeal", "repeat", "repel", "repent", "rephrase", "replace", "replenish", "replete", "replicate", "reply", "repoint", "report", "repose", "reposition", "repossess", "represent", "repress", "reprieve", "reprimand", "reprint", "reprise", "reprize", "reproach", "reprobate", "reproduce", "reproof", "reprove", "repudiate", "repugn", "repulse", "request", "require", "requite", "rescind", "rescue", "research", "resect", "resemble", "resent", "reserve", "resew", "reshape", "reside", "resign", "resile", "resist", "resole", "resolve", "resonate", "resort", "resound", "respect", "respire", "respite", "respond", "rest", "restart", "restate", "restitute", "restore", "restrain", "restrict", "result", "resume", "resurrect", "resuscitate", "retain", "retaliate", "retard", "retch", "retick", "retire", "retool", "retort", "retrace", "retract", "retrieve", "retrograde", "retrogress", "retrospect", "retrovert", "return", "reunify", "reunite", "reuse", "revalue", "revamp", "reveal", "revel", "revenge", "reverberate", "revere", "reverence", "reverse", "revert", "review", "revile", "revise", "revitalise", "revitalize", "revive", "revivify", "revoke", "revolt", "revolutionise", "revolutionize", "revolve", "reward", "reword", "rhyme", "rib", "rick", "ricochet", "riddle", "ridicule", "riff", "riffle", "rifle", "rig", "right", "rile", "rime", "rinse", "riot", "rip", "ripen", "ripen", "riposte", "ripple", "risk", "rival", "rive", "rivet", "roam", "roar", "roast", "rob", "robe", "rock", "rocket", "roil", "roister", "roleplay", "roll", "rollick", "romance", "romp", "rook", "room", "roost", "root", "rootle", "rope", "rot", "rotate", "round", "rouse", "rout", "rove", "rub", "rubber", "rubberise", "rubberize", "ruck", "ruckle", "rue", "ruff", "ruffle", "ruin", "rule", "rumble", "rumor", "rumour", "rumple", "rupture", "rush", "rust", "rustle", "rut", "sabotage", "saccharify", "sack", "sacrifice", "sadden", "saddle", "sag", "sail", "sailplane", "saint", "salivate", "sally", "salute", "salvage", "salve", "sample", "sanctify", "sanction", "sand", "sandbag", "sandpaper", "sap", "saponify", "sash", "sashay", "sass", "sate", "satiate", "satirise", "satirize", "satisfy", "saturate", "saunter", "savage", "save", "savor", "savour", "savvy", "scab", "scabble", "scald", "scale", "scam", "scamper", "scan", "scandalise", "scandalize", "scant", "scare", "scarify", "scarp", "scarper", "scat", "scatter", "scavenge", "scend", "scent", "scheme", "schmoose", "schmooze", "schnorr", "school", "scintillate", "scoff", "scold", "scoop", "scoot", "scorch", "score", "scorn", "scotch", "scour", "scourge", "scout", "scowl", "scrabble", "scrag", "scram", "scramble", "scranch", "scrap", "scrape", "scratch", "scraunch", "scrawl", "screak", "scream", "screech", "screen", "screw", "scribble", "scrimp", "scrounge", "scrub", "scrunch", "scrutinise", "scrutinize", "scud", "scuff", "scuffle", "sculpt", "sculpture", "scupper", "scurry", "scuttle", "seal", "seaplane", "sear", "search", "season", "seat", "secede", "secern", "secernate", "seclude", "second", "secrete", "section", "secularise", "secularize", "secure", "sedate", "seduce", "seed", "seem", "seep", "seesaw", "seethe", "segment", "seize", "select", "senesce", "sense", "sentence", "sentimentalise", "sentimentalize", "sentimentise", "sentimentize", "separate", "sequester", "sequestrate", "sermonise", "sermonize", "serve", "service", "settle", "sever", "shack", "shackle", "shade", "shadow", "shaft", "shallow", "sham", "shamble", "shame", "shanghai", "shape", "share", "sharpen", "sharpen", "sharpshoot", "shatter", "shave", "shear", "sheer", "shell", "shelve", "shew", "shield", "shift", "shimmy", "shin", "shinny", "ship", "shirk", "shiver", "shoal", "shock", "shoetree", "shop", "short", "short-circuit", "shorten", "shout", "shower", "shriek", "shrill", "shrine", "shrivel", "shroud", "shudder", "shuffle", "shun", "sibilate", "sic", "sick", "sicken", "sicken", "sidestep", "sidetrack", "sidle", "sieve", "sift", "sigh", "sight", "sign", "signal", "signalise", "signalize", "signify", "silence", "simulate", "sin", "singe", "single-foot", "sip", "sire", "site", "situate", "sketch", "skewer", "ski", "skim", "skimp", "skin", "skip", "skirt", "skitter", "skulk", "skunk", "sky", "skylark", "skyrocket", "slack", "slacken", "slacken", "slake", "slam", "slander", "slang", "slant", "slash", "slaughter", "slaver", "sledge", "sledgehammer", "sleek", "slenderize", "sleuth", "slice", "slick", "slight", "slim", "slip", "slither", "sliver", "slobber", "slog", "slop", "slope", "slosh", "slouch", "slough", "slow", "slue", "slug", "sluice", "slumber", "slump", "slush", "smack", "smart", "smash", "smear", "smile", "smirch", "smoke", "smolder", "smooch", "smooth", "smoothen", "smoothen", "smother", "smudge", "snack", "snap", "snare", "snarf", "snarl", "snatch", "sneeze", "sniff", "sniffle", "snip", "snipe", "snitch", "snivel", "snoop", "snooze", "snort", "snow", "snub", "snuff", "snuffle", "snuggle", "soak", "soap", "soar", "sob", "sock", "sodomise", "sodomize", "soften", "soil", "solace", "solarise", "solarize", "sole", "solemnise", "solemnize", "solicit", "solve", "soothe", "sop", "sophisticate", "sorrow", "sort", "sough", "sound", "sour", "souse", "sow", "span", "spang", "spank", "spare", "sparge", "spark", "sparkle", "spat", "spatter", "spawn", "spay", "specialise", "specialize", "speciate", "specify", "speckle", "speculate", "spell", "spellbind", "spelunk", "spew", "sphacelate", "spice", "spiel", "spike", "spill", "spirit", "spite", "splash", "splatter", "splay", "splice", "splinter", "splosh", "splurge", "splutter", "spoil", "sponge", "sponsor", "spoof", "spoon", "sport", "spot", "spotlight", "spout", "sprain", "sprawl", "spray", "spread-eagle", "spreadeagle", "sprinkle", "sprout", "spud", "spue", "spume", "spur", "spurn", "spurt", "sputter", "spy", "squabble", "squall", "squander", "square", "squash", "squat", "squawk", "squeak", "squeal", "squeeze", "squelch", "squinch", "squint", "squirm", "squirt", "squish", "stab", "stabilise", "stabilize", "stack", "stag", "stage", "stagger", "stagnate", "stain", "stake", "stalk", "stall", "stammer", "stamp", "stanch", "star", "stare", "stargaze", "start", "startle", "starve", "stash", "state", "station", "staunch", "stay", "steady", "steam", "steamer", "steel", "steep", "steer", "step", "stereotype", "sterilise", "sterilize", "stew", "stiffen", "stiffen", "stifle", "stigmatise", "stigmatize", "still", "stimulate", "stint", "stipple", "stipulate", "stir", "stitch", "stock", "stockpile", "stomach", "stomp", "stone", "stool", "stoop", "stopple", "store", "storm", "straddle", "straggle", "straighten", "strain", "straiten", "strand", "strangle", "strangulate", "strap", "straw", "stray", "streak", "stream", "strengthen", "strengthen", "stress", "stretch", "strickle", "strip", "stroll", "struggle", "strum", "strut", "stud", "study", "stuff", "stultify", "stumble", "stump", "stun", "stupefy", "stutter", "style", "stymie", "stymy", "sub", "subcontract", "subdue", "subject", "subjugate", "sublimate", "sublime", "submerge", "submerse", "subordinate", "subscribe", "subside", "subsidize", "subsist", "substantiate", "substitute", "subsume", "subtend", "subtract", "subvert", "succeed", "succor", "succumb", "suck", "suckle", "sue", "suffer", "suffice", "suffocate", "suffuse", "sugar", "sugarcoat", "suggest", "suit", "sulfur", "sulk", "sully", "sulphur", "sum", "summarise", "summarize", "summate", "summit", "sun", "sunbathe", "supercharge", "superintend", "supersede", "supervise", "supplant", "supplement", "supply", "support", "suppose", "suppress", "suppurate", "surcharge", "surf", "surface", "surfboard", "surfeit", "surge", "surmise", "surmount", "surpass", "surprise", "surrender", "surround", "surveil", "survey", "survive", "suspect", "suspend", "suspire", "sustain", "swab", "swaddle", "swag", "swage", "swagger", "swallow", "swamp", "swan", "swank", "swap", "swarm", "swash", "swat", "swathe", "sway", "sweet-talk", "sweeten", "swerve", "swig", "swill", "swindle", "swipe", "swirl", "swish", "switch", "swivel", "swoon", "swoop", "swoosh", "symbolize", "sympathize", "sync", "synchronise", "synchronize", "systematize", "systemise", "systemize", "table", "tabularise", "tabularize", "tabulate", "tack", "tackle", "tail", "tailor", "tailor-make", "taint", "talk", "tally", "tame", "tamper", "tan", "tangle", "tantalise", "tantalize", "tapdance", "tape", "taper", "target", "tarnish", "tarry", "task", "taste", "tat", "tattle", "taunt", "tauten", "taxi", "tease", "tee", "teem", "teeter", "teeter-totter", "teetertotter", "telegraph", "telephone", "temper", "tempt", "tend", "tender", "tenderise", "tenderize", "tense", "tent", "tergiversate", "terminate", "terrace", "terrasse", "terrify", "terrorise", "terrorize", "test", "testify", "thank", "thaw", "theorise", "theorize", "thicken", "thicken", "thieve", "thin", "thirst", "thrash", "thread", "threaten", "thresh", "thrill", "thrive", "throb", "throne", "throng", "throttle", "thrum", "thud", "thumb", "thump", "thunder", "thurify", "thwack", "thwart", "tick", "ticket", "tickle", "ticktack", "ticktock", "tide", "tidy", "tie", "tighten", "tiller", "tilt", "time", "tin", "tinct", "tincture", "tinge", "tingle", "tink", "tinker", "tinkle", "tint", "tipple", "tippytoe", "tiptoe", "tire", "tissue", "titillate", "title", "tittle-tattle", "tittup", "toady", "toast", "toddle", "toenail", "tog", "toil", "tolerate", "tone", "tool", "toot", "top", "tope", "topple", "torment", "torture", "toss", "tot", "total", "tote", "totter", "touch", "tousle", "tout", "tower", "toy", "trace", "track", "trade", "trademark", "traduce", "trail", "train", "trammel", "tramp", "trample", "trance", "tranquilize", "tranquillise", "tranquillize", "transcend", "transcribe", "transfigure", "transform", "transfuse", "transgress", "translate", "transliterate", "transmigrate", "transmit", "transmogrify", "transmute", "transplant", "transport", "transpose", "transubstantiate", "transude", "trap", "trash", "traumatise", "traumatize", "travail", "travel", "traverse", "treasure", "treat", "treble", "tree", "tremble", "tremor", "trench", "trend", "trespass", "trick", "trickle", "trifle", "trigger", "trill", "trim", "trip", "triple", "triumph", "troop", "trot", "trouble", "trounce", "truckle", "trudge", "trump", "trust", "try", "tuck", "tucker", "tug", "tumble", "tumefy", "tumesce", "tunnel", "turn", "turtle", "tusk", "tussle", "twaddle", "tweak", "tweedle", "tweet", "twiddle", "twin", "twine", "twinge", "twinkle", "twirl", "twirp", "twist", "twit", "twitch", "twitter", "type", "typify", "tyrannise", "tyrannize", "ululate", "umpire", "unarm", "unbalance", "unblock", "unbosom", "unbrace", "unburden", "uncase", "unchurch", "uncloak", "unclutter", "uncompress", "uncouple", "uncover", "undercoat", "underestimate", "underline", "undermine", "underpin", "underprice", "underrate", "underscore", "understate", "understudy", "undervalue", "undress", "undulate", "unearth", "unfit", "unfold", "unfurl", "unhallow", "unhinge", "unhorse", "unify", "unionise", "unionize", "unite", "unknot", "unlace", "unlade", "unleash", "unload", "unloose", "unloosen", "unloosen", "unmake", "unmask", "unnerve", "unpack", "unpick", "unplug", "unravel", "unroll", "unsay", "unscramble", "unsettle", "unsnarl", "unstrain", "untangle", "unthaw", "untie", "untune", "unwrap", "upbraid", "upchuck", "upgrade", "uplift", "upraise", "uprise", "uproot", "urge", "urinate", "urticate", "use", "usher", "usurp", "utilise", "utilize", "utter", "vacate", "vacation", "vaccinate", "vacillate", "vacuum", "vacuum-clean", "vagabond", "validate", "valuate", "value", "vamoose", "vamp", "vanish", "vanquish", "vaporise", "vaporize", "variegate", "varnish", "vary", "vaticinate", "vault", "vaunt", "veer", "veil", "vellicate", "vend", "venerate", "vent", "ventilate", "venture", "verbalise", "verbalize", "verify", "verse", "versify", "vesicate", "vest", "veto", "vibrate", "victimise", "victimize", "videotape", "vie", "view", "vilify", "vilipend", "vindicate", "violate", "visit", "visualise", "visualize", "vitalise", "vitalize", "vitiate", "vituperate", "vivify", "vocalise", "vocalize", "voice", "void", "volunteer", "vomit", "vouch", "vow", "voyage", "vulgarize", "wad", "waddle", "waffle", "wag", "wage", "wager", "waggle", "wail", "wait", "waitress", "waive", "waken", "waken", "walk", "wall", "wallop", "wallow", "wallpaper", "wamble", "wander", "wane", "wangle", "want", "wanton", "warble", "ward", "ware", "warn", "warp", "warrant", "wash", "wassail", "waste", "watch", "water", "waul", "wave", "waver", "wawl", "weaken", "weaken", "wean", "weary", "weather", "web", "wedge", "wee", "weigh", "weight", "weight-lift", "weightlift", "welch", "welcome", "well", "welsh", "welt", "welter", "whack", "wham", "whap", "wharf", "wheedle", "wheel", "whelm", "whelp", "whiff", "whimper", "whine", "whip", "whir", "whirl", "whirlpool", "whirr", "whisk", "whisker", "whisper", "whistle", "white", "whiten", "whittle", "whiz", "whizz", "whomp", "whoop", "whop", "widen", "wield", "wiggle", "wilt", "wince", "wing", "wink", "winkle", "winnow", "winter", "wire", "wiretap", "wish", "witch", "wither", "witness", "wobble", "wonder", "woo", "woolgather", "work", "worm", "worry", "worsen", "worsen", "worship", "worst", "wrangle", "wrap", "wrawl", "wreak", "wreathe", "wrench", "wrestle", "wrick", "wriggle", "wrinkle", "writhe", "yack", "yak", "yammer", "yank", "yap", "yarn-dye", "yaup", "yaw", "yawl", "yawn", "yawp", "yearn", "yell", "yelp", "yield", "yip", "yodel", "yoke", "yowl", "zap", "zest", "zigzag", "zone", "zoom"],
		s = {};
	r.VBP = s;
	var n = {};
	r.VBD = n;
	var o = {};
	r.VBN = o;
	var l = {};
	r.VBZ = l;
	var u = {};
	r.VBG = u;
	for (var d = 0; d < r.irregular.length; d++) {
		var c = r.irregular[d];
		s[c[0]] = c, c[1] && (n[c[1]] = c), c[2] && (o[c[2]] = c), c[3] && (l[c[3]] = c), c[4] && (u[c[4]] = c)
	}
	for (var p = 0; p < a.length; p++) {
		var m = a[p],
			g = i.solve(m, "VBD"),
			h = i.solve(m, "VBN"),
			f = i.solve(m, "VBZ"),
			b = i.solve(m, "VBG"),
			c = [m, g, h, f, b];
		s[m] = c, n[g] = c, o[h] = c, l[f] = c, u[b] = c
	}
	var v = function (e) {
		return s[e] || n[e] || o[e] || l[e] || u[e] || []
	};
	r.lookup = v
}, function (e, r, t) {
	"use strict";

	function i(e) {
		return !~s.default.indexOf(e)
	}

	function a(e) {
		return !i(e)
	}
	r.__esModule = !0;
	var s = t(4);
	r.isCountable = i, r.isNotCountable = a
}, function (e, r, t) {
	"use strict";

	function i(e) {
		if (e = e.split(/\W/)[0].toLowerCase().trim(), s.isNotCountable(e)) return !0;
		if (o.singular2plural[e]) return !0;
		if (o.plural2singular[e]) return !1;
		for (var r = 0; r < n.singularPatterns.length; r++)
			if (n.singularPatterns[r].test(e)) return !0;
		for (var r = 0; r < n.pluralPatterns.length; r++)
			if (n.pluralPatterns[r].test(e)) return !1;
		return !0
	}

	function a(e) {
		return e = e.split(/\W/)[0].toLowerCase().trim(), !!s.isNotCountable(e) || !i(e)
	}
	r.__esModule = !0;
	var s = t(1),
		n = t(11),
		o = t(3);
	r.isSingular = i, r.isPlural = a
}, function (e, r, t) {
	"use strict";
	r.__esModule = !0;
	var i = {
		abacus: ["abacuses"],
		abyss: ["abysses"],
		addendum: ["addenda"],
		agenda: ["agendas"],
		agendum: ["agenda"],
		"agent-provocateur": ["agents-provocateurs"],
		"aide-de-camp": ["aides-de-camp"],
		aircraft: ["aircraft"],
		albino: ["albinos"],
		album: ["albums"],
		alfalfa: ["alfalfas"],
		alga: ["algae"],
		alumna: ["alumnae"],
		alumnus: ["alumni"],
		amoeba: ["amoebae"],
		analysis: ["analyses"],
		anathema: ["anathemata"],
		annex: ["annexes"],
		antenna: ["antennas"],
		antithesis: ["antitheses"],
		apex: ["apices", "apexes"],
		apparatus: ["apparatuses"],
		appendix: ["appendices", "appendixes"],
		apple: ["apples"],
		aquarium: ["aquaria", "aquariums"],
		arch: ["arches"],
		armadillo: ["armadillos"],
		ass: ["asses"],
		atlas: ["atlases"],
		"attorne-general": ["attorneys-general"],
		aurora: ["auroras"],
		auto: ["autos"],
		axe: ["axes"],
		axis: ["axes"],
		baby: ["babies"],
		bacillus: ["bacilli"],
		bacterium: ["bacteria"],
		balloon: ["balloons"],
		banana: ["bananas"],
		barracks: ["barracks"],
		barracuda: ["barracudas"],
		basis: ["bases"],
		batch: ["batches"],
		beach: ["beaches"],
		beau: ["beaux"],
		"beau-geste": ["beaux-gestes"],
		"bel-homme": ["beaux-hommes"],
		belief: ["beliefs"],
		"belle-epoque": ["belles-epoques", "belle-epoques"],
		bikini: ["bikinis"],
		bildungsroman: ["bildungsromane"],
		"bill-of-attainder": ["bills-of-attainder"],
		biscotto: ["biscotti"],
		"bon-mot": ["bons-mots"],
		"bon-vivant": ["bons-vivants"],
		book: ["books"],
		box: ["boxes"],
		brother: ["brothers"],
		brush: ["brushes"],
		buffalo: ["buffalos", "buffaloes"],
		bureau: ["bureaus", "bureaux"],
		bus: ["buses", "busses"],
		cactus: ["cacti"],
		calf: ["calves"],
		cameo: ["cameos"],
		candelabrum: ["candelabra"],
		canto: ["cantos"],
		carton: ["cartons"],
		"cat-o'-nine-tails": ["cat-o'-nine-tails"],
		cello: ["cellos"],
		chateau: ["chateaux", "chateaus"],
		cherry: ["cherries"],
		chick: ["chicks"],
		chicken: ["chickens"],
		chief: ["chiefs"],
		child: ["children"],
		church: ["churches"],
		"château": ["châteaux", "châteaus"],
		circus: ["circuses"],
		city: ["cities"],
		cod: ["cods"],
		codex: ["codices"],
		combo: ["combos"],
		complex: ["complexes"],
		concerto: ["concerti", "concertos"],
		copy: ["copies"],
		cornea: ["corneas"],
		corps: ["corps"],
		corpus: ["corpora", "corpuses"],
		"coup d'etat": ["coups d'etat"],
		"court-martial": ["courts-martial"],
		"cri du coeur": ["cris du coeur"],
		crisis: ["crises"],
		criterion: ["criteria"],
		crocus: ["crocuses"],
		curriculum: ["curricula"],
		daisy: ["daisies"],
		datum: ["data"],
		des: ["deses"],
		diagnosis: ["diagnoses"],
		dictionary: ["dictionaries"],
		die: ["dice"],
		"director-general": ["directors-general"],
		dogma: ["dogmata"],
		domino: ["dominoes"],
		dukhobor: ["dukhobortsy"],
		duo: ["duos"],
		duplex: ["duplexes"],
		dwarf: ["dwarves", "dwarfs"],
		echo: ["echoes"],
		ego: ["egos"],
		elf: ["elves"],
		ellipsis: ["ellipses"],
		embargo: ["embargoes"],
		emphasis: ["emphases"],
		"entente-cordiale": ["ententes-cordiales"],
		erratum: ["errata"],
		"fait-accompli": ["faits-accomplis"],
		family: ["families"],
		"faux-pas": ["faux-pas"],
		fax: ["faxes"],
		"fee simple absolute": ["fees simple absolute"],
		fez: ["fezzes", "fezes"],
		fireman: ["firemen"],
		fish: ["fishes"],
		flush: ["flushes"],
		fly: ["flies"],
		focus: ["foci", "focuses"],
		folio: ["folios"],
		foot: ["feet"],
		formula: ["formulas", "formulae"],
		fungus: ["fungi", "funguses"],
		gallows: ["gallows"],
		gas: ["gases"],
		gens: ["gentes"],
		genu: ["genua"],
		genus: ["genera"],
		goose: ["geese"],
		"governor-general": ["governors-general"],
		graffito: ["graffiti"],
		grief: ["griefs"],
		grouse: ["grouses"],
		gulf: ["gulfs"],
		guru: ["gurus"],
		half: ["halves"],
		hallux: ["halluces"],
		halo: ["halos"],
		"ham on rye": ["ham-on-ryes"],
		handkerchief: ["handkerchiefs"],
		"head of state": ["heads of states", "heads of state"],
		hero: ["heroes"],
		hetero: ["heteros"],
		hex: ["hexes"],
		hippopotamus: ["hippopotami", "hippopotamuses"],
		hoax: ["hoaxes"],
		holluschik: ["holluschikie"],
		hoof: ["hooves"],
		hypothesis: ["hypotheses"],
		"idee-fixe": ["idees-fixes"],
		index: ["indexes", "indices", "indeces"],
		inferno: ["infernos"],
		insigne: ["insignia"],
		iris: ["irises"],
		iter: ["itinera"],
		"jack-in-the-box": ["jacks-in-the-box", "jack-in-the-boxes"],
		"jack-in-the-pulpit": ["jacks-in-the-pulpit", "jack-in-the-pulpits"],
		"jack-o'-lantern": ["jack-o'-lanterns"],
		kerchief: ["kerchiefs"],
		kimono: ["kimonos"],
		kiss: ["kisses"],
		knife: ["knives"],
		krone: ["kroner"],
		lady: ["ladies"],
		larva: ["larvae"],
		lasso: ["lassos"],
		leaf: ["leaves"],
		lemma: ["lemmata", "lemmas"],
		libretto: ["libretti", "librettos"],
		life: ["lives"],
		loaf: ["loaves"],
		locus: ["loci"],
		louse: ["lice"],
		man: ["men"],
		"man-about-town": ["men-about-town"],
		"man-child": ["men-children"],
		"man-of-war": ["men-of-war"],
		mango: ["mangoes"],
		manservant: ["menservants"],
		martini: ["martinis"],
		matrix: ["matrices", "matrixes"],
		matzo: ["matzoth"],
		medium: ["media"],
		memento: ["mementos"],
		memo: ["memos"],
		memorandum: ["memoranda"],
		menu: ["menus"],
		mess: ["messes"],
		millennium: ["millenniums", "millennium", "millennia"],
		"minister-president": ["ministers-president"],
		minutia: ["minutiae"],
		mischief: ["mischiefs"],
		moose: ["moose"],
		mosquito: ["mosquitoes"],
		motto: ["mottoes"],
		mouse: ["mice"],
		muff: ["muffs"],
		mussolini: ["mussolinis"],
		nanny: ["nannies"],
		nebula: ["nebulae", "nebulas"],
		neurosis: ["neuroses"],
		"never-was": ["never-weres"],
		nova: ["novas"],
		nucleus: ["nuclei"],
		oaf: ["oafs"],
		oasis: ["oases"],
		octopus: ["octopuses", "octopodes", "octopi"],
		opus: ["opera", "operas"],
		ornis: ["ornithes"],
		ovum: ["ova"],
		ox: ["oxen"],
		page: ["pages"],
		pakistani: ["pakistanis"],
		panino: ["panini"],
		paparazzo: ["paparazzi"],
		paralysis: ["paralyses"],
		parenthesis: ["parentheses"],
		party: ["parties"],
		pass: ["passes"],
		passerby: ["passersby"],
		penny: ["pennies"],
		person: ["people"],
		phenomenon: ["phenomena"],
		phobia: ["phobias"],
		photo: ["photos"],
		phylum: ["phyla"],
		piano: ["pianos"],
		pitch: ["pitches"],
		plateau: ["plateaux", "plateaus"],
		poppy: ["poppies"],
		portfolio: ["portfolios"],
		portico: ["porticos"],
		potato: ["potatoes"],
		pro: ["pros"],
		"procurator-fiscal": ["procurators-fiscal"],
		prognosis: ["prognoses"],
		proof: ["proofs"],
		pupa: ["pupae"],
		quadrans: ["quadrantes"],
		quarto: ["quartos"],
		quiz: ["quizzes"],
		radius: ["radii"],
		referendum: ["referenda", "referendums"],
		reflex: ["reflexes"],
		rhombus: ["rhombuses"],
		roof: ["roofs"],
		rubai: ["rubaiyat"],
		"runner-up": ["runners-up"],
		safe: ["safes"],
		salmon: ["salmons"],
		scarf: ["scarves", "scarfs"],
		schema: ["schemata", "schemas"],
		schoolchild: ["schoolchildren"],
		scratch: ["scratches"],
		scrotum: ["scrota", "scrotums"],
		self: ["selves"],
		seraph: ["seraphim"],
		sheaf: ["sheaves"],
		shelf: ["shelves"],
		"ship of the line": ["ships of the line"],
		shrimp: ["shrimps"],
		shtetl: ["shtetlach"],
		silo: ["silos"],
		snafu: ["snafus"],
		solo: ["solos"],
		"son of a bitch": ["sons of bitches", "sons-of-a-bitch"],
		"son-in-law": ["sons-in-law"],
		spaghetto: ["spaghettis", "spaghetti"],
		splash: ["splashes"],
		spy: ["spies"],
		stadium: ["stadiums"],
		stereo: ["stereos"],
		stigma: ["stigmata", "stigmas"],
		stimulus: ["stimuli"],
		stitch: ["stitches"],
		stoma: ["stomata", "stomas"],
		story: ["stories"],
		stratum: ["strata"],
		studio: ["studios"],
		syllabus: ["syllabi", "syllabuses"],
		symposium: ["symposia", "symposiums"],
		synopsis: ["synopses"],
		synthesis: ["syntheses"],
		tableau: ["tableaux", "tableaus"],
		taco: ["tacos"],
		tattoo: ["tattoos"],
		tax: ["taxes"],
		"tete-a-tete": ["tete-a-tetes"],
		that: ["those"],
		thesis: ["theses"],
		thief: ["thieves"],
		this: ["these"],
		tomato: ["tomatoes"],
		tooth: ["teeth"],
		tornado: ["tornadoes"],
		torpedo: ["torpedoes"],
		torte: ["torten"],
		"tour-de-force": ["tours-de-force"],
		trout: ["trouts"],
		try: ["tries"],
		tuna: ["tunas"],
		turf: ["turfs"],
		tuxedo: ["tuxedos"],
		typo: ["typos"],
		ushabti: ["ushabtiu"],
		vas: ["vasa"],
		vertebra: ["vertebrae"],
		vertex: ["vertices", "vertexes"],
		veto: ["vetoes"],
		video: ["videos"],
		vita: ["vitae"],
		volcano: ["volcanoes"],
		vortex: ["vortices", "vortexes"],
		walrus: ["walruses"],
		waltz: ["waltzes"],
		wash: ["washes"],
		watch: ["watches"],
		wharf: ["wharves"],
		wife: ["wives"],
		"will-o'-the-wisp": ["will-o'-the-wisps"],
		wish: ["wishes"],
		wolf: ["wolves"],
		woman: ["women"],
		"woman-doctor": ["women-doctors"],
		word: ["words"],
		workman: ["workmen"],
		wunderkind: ["wunderkinder"],
		yemeni: ["yemenis"],
		yeshiva: ["yeshivoth"],
		yo: ["yos"],
		zecchino: ["zecchini"],
		zero: ["zeros", "zeroes"],
		zoo: ["zoos"]
	};
	r.singular2plural = i;
	var a = {};
	r.plural2singular = a;
	for (var s in i) ! function (e) {
		if (!i.hasOwnProperty(e)) return "continue";
		i[e].forEach(function (r) {
			return a[r] = [e]
		})
	}(s)
}, function (e, r, t) {
	"use strict";
	r.__esModule = !0, r.default = ["abdomen", "access", "accommodation", "adulthood", "advertising", "advice", "advise", "aggression", "aid", "air", "alcohol", "anger", "applause", "arithmetic", "asbestos", "assistance", "athletics", "attention", "bacon", "baggage", "ballet", "barracks", "beauty", "beer", "bias", "biology", "bison", "blood", "blues", "botany", "bread", "business", "butter", "calm", "carbon", "cardboard", "cash", "chalk", "chaos", "cheese", "chess", "childhood", "coal", "commerce", "compassion", "comprehension", "content", "corruption", "cotton", "countable", "courage", "dancing", "danger", "darkness", "deer", "dessert", "determination", "dignity", "dirt", "dust", "economics", "education", "electricity", "employment", "engineering", "enjoyment", "enthusiasm", "envy", "ethics", "evidence", "evolution", "faith", "fame", "fiction", "fire", "fish", "flour", "flu", "food", "freedom", "fruit", "fuel", "fun", "furniture", "gallows", "garbage", "garlic", "gas", "genetics", "glass", "gold", "golf", "gossip", "grammar", "grass", "gratitude", "grief", "guilt", "gymnastics", "hair", "halibut", "happiness", "hardware", "harm", "hate", "hatred", "health", "heat", "height", "help", "homework", "honesty", "honey", "hospitality ", "hospitality", "housework", "humor", "humour", "hunger", "hydrogen", "ice-cream", "ice", "imagination", "importance", "inflation", "information", "injustice", "innocence", "intelligence", "iron", "irony", "jealousy", "jelly", "joy", "judo", "juice", "karate", "kindness", "knowledge", "lack", "laughter", "lava", "leather", "leisure", "lightning", "linguistics", "literature", "litter", "logic", "loneliness", "love", "luck", "luggage", "machinery", "magic", "mail", "management", "mankind", "mathematics", "mayonnaise", "means", "measles", "meat", "methane", "milk", "money", "moose", "motherhood", "motivation", "mud", "music", "nature", "news", "nitrogen", "nonsense", "nurture", "nutrition", "obedience", "obesity", "offspring", "oil", "oxygen", "pasta", "patience", "physics", "poetry", "pollution", "pride", "progress", "psychology", "quartz", "racism", "rain", "relaxation", "reliability", "respect", "revenge", "rice", "rubbish", "rum", "safety", "salmon", "salt", "samurai", "sand", "satire", "scenery", "scissors", "seafood", "seaside", "semen", "series", "shame", "sheep", "shopping", "shrimp", "silence", "sleep", "smoke", "smoking", "snow", "soap", "software", "soil", "soup", "species", "speed", "steam", "stress", "stuff", "stupidity", "success", "sugar", "sunshine", "swine", "symmetry", "tea", "tennis", "texas", "thirst", "thunder", "timber", "time", "toast", "tolerance", "traffic", "travel", "trout", "trust", "tuna", "understanding", "underwear", "unemployment", "unity", "usage", "validity", "veal", "vegetarianism", "vegetation", "vengeance", "violence", "vitality", "warmth", "water", "wealth", "weather", "welfare", "wheat", "whiskey", "width", "wildlife", "wine", "wisdom", "wood", "wool", "work", "yeast", "yoga", "youth", "zinc", "zoology"]
}, function (e, r, t) {
	"use strict";

	function i(e, r) {
		for (var t = 0; t < a.length; t++) {
			var i = a[t];
			if (i.test.test(e)) return i.transform(e, r)
		}
		return ""
	}
	r.__esModule = !0;
	var a = [{
		test: /([uao]m[pb]|[oa]wn|ey|elp|[ei]gn|ilm|o[uo]r|[oa]ugh|igh|ki|ff|oubt|ount|awl|o[alo]d|[iu]rl|upt|[oa]y|ight|oid|empt|act|aud|e[ea]d|ound|[aeiou][srcln]t|ept|dd|[eia]n[dk]|[ioa][xk]|[oa]rm|[ue]rn|[ao]ng|uin|eam|ai[mr]|[oea]w|[eaoui][rscl]k|[oa]r[nd]|ear|er|[^aieouyfm]it|[aeiouy]ir|[^aieouyfm]et|ll|en|vil|om|[^rno].mit|rup|bat|val|.[^skxwb][rvmchslwngb]el)$/,
		transform: function (e, r) {
			return "VBZ" === r ? e + "s" : "VBG" === r ? e + "ing" : "VBN" === r || "VBD" === r ? e + "ed" : e
		}
	}, {
		test: /[^aeiou]y$/,
		transform: function (e, r) {
			var t = e.substr(0, e.length - 1);
			return "VBZ" === r ? t + "ies" : "VBG" === r ? e + "ing" : "VBN" === r || "VBD" === r ? t + "ied" : e
		}
	}, {
		test: /[^aeiouy]e$/,
		transform: function (e, r) {
			var t = e.substr(0, e.length - 1);
			return "VBZ" === r ? e + "s" : "VBG" === r ? t + "ing" : "VBN" === r || "VBD" === r ? t + "ed" : e
		}
	}, {
		test: /([^dtaeiuo][aeiuo][ptlgnm]|ir|cur|ug|[hj]ar|[^aouiey]ep|[^aeiuo][oua][db])$/,
		transform: function (e, r) {
			return "VBZ" === r ? e + "s" : "VBG" === r ? e + e[e.length - 1] + "ing" : "VBN" === r || "VBD" === r ? e + e[e.length - 1] + "ed" : e
		}
	}, {
		test: /([ieao]ss|[aeiouy]zz|[aeiouy]ch|nch|rch|[aeiouy]sh|[iae]tch|ax)$/,
		transform: function (e, r) {
			return "VBZ" === r ? e + "es" : "VBG" === r ? e + "ing" : "VBN" === r || "VBD" === r ? e + "ed" : e
		}
	}, {
		test: /(ee)$/,
		transform: function (e, r) {
			return "VBZ" === r ? e + "s" : "VBG" === r ? e + "ing" : "VBN" === r || "VBD" === r ? e + "d" : e
		}
	}, {
		test: /(ie)$/,
		transform: function (e, r) {
			return "VBZ" === r ? e + "s" : "VBG" === r ? e.substr(0, e.length - 2) + "ying" : "VBN" === r || "VBD" === r ? e + "d" : e
		}
	}, {
		test: /(ue)$/,
		transform: function (e, r) {
			return "VBZ" === r ? e + "s" : "VBG" === r ? e.substr(0, e.length - 1) + "ing" : "VBN" === r || "VBD" === r ? e + "d" : e
		}
	}, {
		test: /./,
		transform: function (e, r) {
			return "VBZ" === r ? e + "s" : "VBG" === r ? e + "ing" : "VBN" === r || "VBD" === r ? e + "ed" : e
		}
	}];
	r.solve = i
}, function (e, r, t) {
	"use strict";
	r.__esModule = !0;
	var i = t(10),
		a = t(14),
		s = t(13),
		n = t(2),
		o = t(1),
		l = t(0),
		u = t(4);
	r.nonCountables = u.default;
	var d = function () {
		function e(e) {
			var r = this;
			this.comparative = function () {
				return i.comparative(r.word)
			}, this.superlative = function () {
				return i.superlative(r.word)
			}, this.conjugate = function (e) {
				return a.conjugate(r.word, e)
			}, this.toPresent = function () {
				return a.toPresent(r.word)
			}, this.toPast = function () {
				return a.toPast(r.word)
			}, this.toPastParticiple = function () {
				return a.toPastParticiple(r.word)
			}, this.toPresentS = function () {
				return a.toPresentS(r.word)
			}, this.toGerund = function () {
				return a.toGerund(r.word)
			}, this.toPlural = function () {
				return s.toPlural(r.word)
			}, this.toSingular = function () {
				return s.toSingular(r.word)
			}, this.isSingular = function () {
				return n.isSingular(r.word)
			}, this.isPlural = function () {
				return n.isPlural(r.word)
			}, this.isCountable = function () {
				return o.isCountable(r.word)
			}, this.isNotCountable = function () {
				return o.isNotCountable(r.word)
			}, this.word = (e || "").toLowerCase()
		}
		return e
	}();
	r.Inflectors = d, r.Inflector = d;
	var c = l.VBP;
	r.infinitives = c
}, function (e, r, t) {

	// alert(document.getElementById("verbs-input").value);
	function i(e, r) {
		var t = document.getElementById(e).value;
		setInterval(function () {
			t !== document.getElementById(e).value && r()
		}, 20)
	}

	function a(type, e) {
		return " '" + type + "' : '" + e + "'";
	}
	const s = t(6).Inflectors;
	// i("verbs-input", function () {
	// 	var e = document.getElementById("verbs-input").value;
	// 	if (e) {
	// 		var r = new s(e),
	// 			t = a(r.toPresent()) + a(r.toPast()) + a(r.toPastParticiple()) + "<br>" + a(r.toGerund()) + a(r.toPresentS());
	// 		document.getElementById("verbs-output").innerHTML = t
	// 	}
	// })
	var e = document.getElementById("verbs-input").getAttribute("data-verb").trim();
	if (e) {
		var r = new s(e),
			json = "{" + a("toPresent", r.toPresent()) + "," + a("toPast", r.toPast()) + "," + a("toPastParticiple", r.toPastParticiple()) + "," + a("toGerund", r.toGerund()) + "," + a("toPresentS", r.toPresentS()) + "}",
			t = a(r.toPresent()) + a(r.toPast()) + a(r.toPastParticiple()) + "<br>" + a(r.toGerund()) + a(r.toPresentS());
		document.getElementById("verbs-output").innerHTML = json
	}
}, function (e, r, t) {
	"use strict";
	r.__esModule = !0, r.irregulars = {
		bad: ["worse", "worst"],
		far: ["further", "furthest"],
		good: ["better", "best"],
		late: ["later", "latest"],
		little: ["less", "least"],
		many: ["more", "most"],
		much: ["more", "most"],
		some: ["more", "most"],
		old: ["older", "oldest"],
		crowded: ["more crowded", "most crowded"]
	}
}, function (e, r, t) {
	"use strict";
	r.__esModule = !0;
	var i = function (e) {
		return e.split(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/).length
	};
	r.default = [{
		test: function (e) {
			return i(e) > 3 && !(i(e) < 5 && /y$/.test(e))
		},
		comp: function (e) {
			return "more " + e
		},
		supr: function (e) {
			return "most " + e
		}
	}, {
		test: function (e) {
			return i(e) > 2 && /ing$/.test(e)
		},
		comp: function (e) {
			return "more " + e
		},
		supr: function (e) {
			return "most " + e
		}
	}, {
		test: function (e) {
			return i(e) > 2 && /ed$/.test(e)
		},
		comp: function (e) {
			return "more " + e
		},
		supr: function (e) {
			return "most " + e
		}
	}, {
		test: function (e) {
			return /[^aeiouy][aeiouy][^rwaeiouy]$/.test(e)
		},
		comp: function (e) {
			return e.replace(/([^aeiouy])$/, "$1$1er")
		},
		supr: function (e) {
			return e.replace(/([^aeiouy])$/, "$1$1est")
		}
	}, {
		test: function (e) {
			return /y$/.test(e)
		},
		comp: function (e) {
			return e.replace(/y$/, "ier")
		},
		supr: function (e) {
			return e.replace(/y$/, "iest")
		}
	}, {
		test: function (e) {
			return /e$/.test(e)
		},
		comp: function (e) {
			return e.replace(/e$/, "er")
		},
		supr: function (e) {
			return e.replace(/e$/, "est")
		}
	}, {
		test: function (e) {
			return !0
		},
		comp: function (e) {
			return e + "er"
		},
		supr: function (e) {
			return e + "est"
		}
	}]
}, function (e, r, t) {
	"use strict";
	r.__esModule = !0;
	var i = t(9),
		a = t(8);
	r.comparative = function (e) {
		if (a.irregulars[e]) return a.irregulars[e][0];
		for (var r = 0; r < i.default.length; r++)
			if (i.default[r].test(e)) return i.default[r].comp(e);
		return ""
	}, r.superlative = function (e) {
		if (a.irregulars[e]) return a.irregulars[e][1];
		for (var r = 0; r < i.default.length; r++)
			if (i.default[r].test(e)) return i.default[r].supr(e);
		return ""
	}
}, function (e, r, t) {
	"use strict";
	r.__esModule = !0;
	var i = [/[bcdfgjkmruopquvxzw]$/, /ss$/, /sis$/, /thos$/, /pus$/, /tis$/, /^[a-z]{1}s$/, /us$/, /(n|r)is$/, /tmas$/, /[abefgjklpqywxyz]a$/, /[^i]ca$/, /[^n]da$/, /[^p]ha$/, /([^dvtlar])ia$/, /([^i]|(cteri|at|ul|at|asi|di|nd|ov|ri))a$/, /(z|h|g|b|r|l)eria$/, /[^ci]teria$/, /[^cb]ilia$/, /[^xi]lia$/, /[^e]ma$/, /[^aeu]na$/, /[^ciam][a-z]na$/, /[ifo]\w{2}na$/, /[^aip]ta$/, /[^rmpe][a-z]ta$/, /[^gart][a-z][a-z]ta$/, /(a)e$/, /people$/, /[^t][^t][^o][^i][^a]e$/, /[^i][^t]h$/, /[uacgzheimnot][a-z]i$/, /[^atvliopcbnmgfds][a-z]*i$/, /[a-z][^ertiopasl][a-z]+[a-z]i$/, /[^e]l$/, /[^e]n$/];
	r.singularPatterns = i;
	var a = [/men$/, /sortia$/, /^media$/, /^cilia$/, /abilia$/, /trivia$/, /[^jtma](chi*|yn|ol|am|i|umn|os|an|ermin|omb|ul|eol|cle|on|un)i$/, /(um|pa|ro)ni$/, /(uo|io)si$/, /onchi$/, /(o|u|a)li$/, /(e|i)i$/, /ies$/, /ves$/, /es$/, /[aouiey]ys$/, /oos$/, /ios$/, /[tfg]ee[sth]{1,2}e*$/, /[^aouies][aoui]s$/, /[ea]s$/, /[^aouie]s$/];
	r.pluralPatterns = a
}, function (e, r, t) {
	"use strict";
	r.__esModule = !0;
	var i = [{
		regexp: /dix$/,
		replacement: "dices"
	}, {
		regexp: /ooch$/,
		replacement: "$1chs"
	}, {
		regexp: /(m)an$/,
		replacement: "$1en"
	}, {
		regexp: /(pe)rson$/,
		replacement: "$1ople"
	}, {
		regexp: /(child)$/,
		replacement: "$1ren"
	}, {
		regexp: /^(ox)$/,
		replacement: "$1en"
	}, {
		regexp: /(ax|test)is$/,
		replacement: "$1es"
	}, {
		regexp: /(op|ir|umn|am|ll|ct|oc|ng|le|di|ul|ab|rmin|or|in)us$/,
		replacement: "$1i"
	}, {
		regexp: /(alias|status)$/,
		replacement: "$1es"
	}, {
		regexp: /(bu)s$/,
		replacement: "$1ses"
	}, {
		regexp: /(fal|tat|ch|rg|ott|mat|ped|et|can|er|uit|her|ad)o$/,
		replacement: "$1oes"
	}, {
		regexp: /([aeiouy]ri|dat|cul|rat|nasi|edi|rand|ov)um$/,
		replacement: "$1a"
	}, {
		regexp: /([aoeuiy]|er)ion$/,
		replacement: "$1ia"
	}, {
		regexp: /(mat|erio|omen|hedr)on$/,
		replacement: "$1a"
	}, {
		regexp: /(is|ps|hes|as|ys|os|ax)is$/,
		replacement: "$1es"
	}, {
		regexp: /(?:([^f])fe|([lrf])f)$/,
		replacement: "$1$2ves"
	}, {
		regexp: /(hive)$/,
		replacement: "$1s"
	}, {
		regexp: /([^aeiouy]|qu)y$/,
		replacement: "$1ies"
	}, {
		regexp: /([aeiouy]y)$/,
		replacement: "$1s"
	}, {
		regexp: /(matr|vert|ind)(ix|ex)$/,
		replacement: "$1ices"
	}, {
		regexp: /([m|l])ouse$/,
		replacement: "$1ice"
	}, {
		regexp: /(alg|lumn|tenn|arv|ebul|pup|rteb|vit)a$/,
		replacement: "$1ae"
	}, {
		regexp: /(uz|qui|ut)(z)$/,
		replacement: "$1$2zes"
	}, {
		regexp: /(opa|alt)(z)$/,
		replacement: "$1zes"
	}, {
		regexp: /^(f|t|g)oo([thse]{1,2})$/,
		replacement: "$1ee$2"
	}, {
		regexp: /([^aeiouy])eau$/,
		replacement: "$1eaux"
	}, {
		regexp: /([aeiouy])f$/,
		replacement: "$1ves"
	}, {
		regexp: /(x|ch|ss|sh|s)$/,
		replacement: "$1es"
	}, {
		regexp: /o$/,
		replacement: "oes"
	}, {
		regexp: /$/,
		replacement: "s"
	}];
	r.toPlural = i;
	var a = [{
		regexp: /([^aeiouy]|qu)ies$/,
		replacement: "$1y"
	}, {
		regexp: /(falo|tato|cho|rgo|otto|mato|pedo|eto|cano|ero|uito|hero)es$/,
		replacement: "$1"
	}, {
		regexp: /(lys|xis|bas|ris|ips|thes|uros|oas|ys|ops)es$/,
		replacement: "$1is"
	}, {
		regexp: /(z)zes$/,
		replacement: "$1"
	}, {
		regexp: /(alg|lumn|tenn|arv|ebul|pup|rteb|vit)ae$/,
		replacement: "$1a"
	}, {
		regexp: /(cteri|at|ul|at|asi|di|nd|ov|ri)a$/,
		replacement: "$1um"
	}, {
		regexp: /(vert|ind)ices$/,
		replacement: "$1ex"
	}, {
		regexp: /(()(a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he|(p)ha)ses/,
		replacement: "$1$2sis"
	}, {
		regexp: /(hive)s$/,
		replacement: "$1"
	}, {
		regexp: /(tive)s$/,
		replacement: "$1"
	}, {
		regexp: /(curve)s$/,
		replacement: "$1"
	}, {
		regexp: /([aeiou]y)s$/,
		replacement: "$1"
	}, {
		regexp: /([m|l])ice$/,
		replacement: "$1ouse"
	}, {
		regexp: /(m)en$/,
		replacement: "$1an"
	}, {
		regexp: /(s)eries$/,
		replacement: "$1eries"
	}, {
		regexp: /(m)ovies$/,
		replacement: "$1ovie"
	}, {
		regexp: /(bus)es$/,
		replacement: "$1"
	}, {
		regexp: /(shoe)s$/,
		replacement: "$1"
	}, {
		regexp: /(o)es$/,
		replacement: "$1"
	}, {
		regexp: /^(cris|ax|test)es$/,
		replacement: "$1is"
	}, {
		regexp: /(octop|vir)i$/,
		replacement: "$1us"
	}, {
		regexp: /(alias|status)es$/,
		replacement: "$1"
	}, {
		regexp: /^(ox)en$/,
		replacement: "$1"
	}, {
		regexp: /(matr)ices$/,
		replacement: "$1ix"
	}, {
		regexp: /([a-z]{1})ee([a-z]{1,2})$/,
		replacement: "$1oo$2"
	}, {
		regexp: /([^aeiouy][aeiouy][^aeiouy]{1,2}e*)i|i$/,
		replacement: "$1us"
	}, {
		regexp: /([^aeiouy])eaux$/g,
		replacement: "$1eau"
	}, {
		regexp: /([aeiouy]us)es$/,
		replacement: "$1e"
	}, {
		regexp: /([^l][oa]s)es$/,
		replacement: "$1is"
	}, {
		regexp: /([aeiouy]{2})ves$/,
		replacement: "$1f"
	}, {
		regexp: /([aeiouy])ves$/,
		replacement: "$1fe"
	}, {
		regexp: /(h\w{2})ves$/,
		replacement: "$1f"
	}, {
		regexp: /(el|car|cal|war)ves$/,
		replacement: "$1f"
	}, {
		regexp: /([xsz])es$/,
		replacement: "$1"
	}, {
		regexp: /(x|ch|sh|ss)es$/,
		replacement: "$1"
	}, {
		regexp: /s$/,
		replacement: ""
	}];
	r.toSingular = a
}, function (e, r, t) {
	"use strict";
	r.__esModule = !0;
	var i = t(2),
		a = t(3),
		s = t(12);
	r.toPlural = function (e) {
		if (i.isPlural(e)) return e;
		if (a.singular2plural[e]) return a.singular2plural[e][0];
		for (var r = 0; r < s.toPlural.length; r++) {
			var t = s.toPlural[r];
			if (t.regexp.test(e)) return e.replace(t.regexp, t.replacement)
		}
		return e
	}, r.toSingular = function (e) {
		if (i.isSingular(e)) return e;
		if (a.plural2singular[e]) return a.plural2singular[e][0];
		for (var r = 0; r < s.toSingular.length; r++) {
			var t = s.toSingular[r];
			if (t.regexp.test(e)) return e.replace(t.regexp, t.replacement)
		}
		return e
	}
}, function (e, r, t) {
	"use strict";
	r.__esModule = !0;
	var i = t(0),
		a = t(5),
		s = t(16),
		n = t(15),
		o = ["VBP", "VBD", "VBN", "VBZ", "VBG"],
		l = function (e, r) {
			void 0 === r && (r = "VBP");
			var t = i.lookup(e),
				l = o.indexOf(r);
			if (t[l]) return t[l];
			if (i.VBP[e]) return a.solve(e, r);
			var u = s.strip(e);
			if (u) {
				var d = i.lookup(u)[l];
				if (d) return s.rebuild(e, u, d);
				if (i.VBP[u]) return s.rebuild(e, u, a.solve(e, r))
			}
			var c = n.default(e);
			return c ? i.lookup(c)[l] || a.solve(c, r) : a.solve(e, r)
		};
	r.conjugate = l;
	var u = function (e) {
		return l(e, "VBP")
	};
	r.toPresent = u;
	var d = function (e) {
		return l(e, "VBD")
	};
	r.toPast = d;
	var c = function (e) {
		return l(e, "VBN")
	};
	r.toPastParticiple = c;
	var p = function (e) {
		return l(e, "VBZ")
	};
	r.toPresentS = p;
	var m = function (e) {
		return l(e, "VBG")
	};
	r.toGerund = m
}, function (e, r, t) {
	"use strict";

	function i(e) {
		if (a(e, "ing")) {
			var r = n.VBP[e.replace(/ing$/, "")];
			if (r) return r[0];
			var t = n.VBP[e.replace(/ing$/, "e")];
			if (t) return t[0];
			var i = n.VBP[e.replace(/.ing$/, "")];
			if (i) return i[0];
			var o = n.VBP[e.replace(/ying$/, "ie")];
			if (o) return o[0]
		} else if (a(e, "s")) {
			var r = n.VBP[e.replace(/s$/, "")];
			if (r) return r[0];
			var t = n.VBP[e.replace(/es$/, "")];
			if (t) return t[0];
			var i = n.VBP[e.replace(/ies$/, "y")];
			if (i) return i[0]
		} else if (a(e, "ed")) {
			var r = n.VBP[e.replace(/ed$/, "")];
			if (r) return r[0];
			var t = n.VBP[e.replace(/d$/, "")];
			if (t) return t[0];
			var i = n.VBP[e.replace(/ied$/, "y")];
			if (i) return i[0];
			var o = n.VBP[e.replace(/ed$/, "y")];
			if (o) return o[0];
			var l = n.VBP[e.replace(/ed$/, "e")];
			if (l) return l[0];
			var u = n.VBP[e.replace(/.ed$/, "")];
			if (u) return u[0]
		}
		return (n.VBP[s.stemmer(e)] || [""])[0]
	}

	function a(e, r) {
		return e.substr(-r.length) === r
	}
	r.__esModule = !0;
	var s = t(17),
		n = t(0);
	r.default = i
}, function (e, r, t) {
	"use strict";

	function i(e) {
		return e.length < 2 ? "" : (e = e.substring(1), s.lookup(e).length ? e : i(e))
	}

	function a(e, r, t) {
		e.substr(0, e.indexOf(r) + r.length);
		return e.split(r).join(t)
	}
	r.__esModule = !0;
	var s = t(0);
	r.strip = i, r.rebuild = a
}, function (e, r, t) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	});
	const i = t(18),
		a = t(19);
	r.stemmer = function (e) {
		if (e.length < 3) return e;
		if ("y" === e.charAt(0) && (e = e.charAt(0).toUpperCase() + e.substr(1)), i.nonstd_S.test(e) ? e = e.replace(i.nonstd_S, "$1$2") : i.std_S.test(e) && (e = e.replace(i.std_S, "$1$2")), i.EED.test(e)) {
			var r = (i.EED.exec(e) || [])[1];
			i.M_gr_0.test(e) && (e = e.substr(0, e.length - 1))
		} else if (i.ED_or_ING.test(e)) {
			var r = (i.ED_or_ING.exec(e) || [])[1];
			i.v_in_stem.test(r) && (e = r, /(at|bl|iz)$/.test(e) ? e += "e" : new RegExp("([^aeiouylsz])\\1$").test(e) ? e = e.substr(0, e.length - 1) : new RegExp("^" + i.C + i.v + "[^aeiouwxy]$").test(e) && (e += "e"))
		}
		if (i.Y.test(e)) {
			var r = (i.Y.exec(e) || [])[1];
			i.v_in_stem.test(r) && (e = r + "i")
		}
		if (i.nonstd_gp1.test(e)) {
			var t = i.nonstd_gp1.exec(e) || [],
				r = t[1],
				s = t[2];
			i.M_gr_0.test(r) && (e = r + a.suffixList.group1[s])
		}
		if (i.nonstd_gp2.test(e)) {
			var t = i.nonstd_gp2.exec(e) || [],
				r = t[1],
				s = t[2];
			i.M_gr_0.test(r) && (e = r + a.suffixList.group2[s])
		}
		if (i.nonstd_gp3.test(e)) {
			var t = i.nonstd_gp3.exec(e) || [],
				r = t[1];
			i.M_gr_1.test(r) && (e = r)
		} else if (i.S_or_T_with_ION.test(e)) {
			var t = i.S_or_T_with_ION.exec(e) || [],
				r = t[1] + t[2];
			i.M_gr_1.test(r) && (e = r)
		}
		if (i.E.test(e)) {
			var t = i.E.exec(e) || [],
				r = t[1];
			(i.M_gr_1.test(r) || i.M_eq_1.test(r) && !i.has_C_and_v_but_doesnt_end_with_AEIOUWXY.test(r)) && (e = r)
		}
		return i.LL.test(e) && i.M_gr_1.test(e) && (e = e.substr(0, e.length - 1)), "Y" === e.charAt(0) && (e = e.charAt(0).toLowerCase() + e.substr(1)), e
	}, r.default = r.stemmer
}, function (e, r, t) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.c = "[^aeiou]", r.v = "[aeiouy]", r.C = r.c + "[^aeiouy]*", r.V = r.v + "[aeiou]*", r.M_gr_0 = new RegExp("^(" + r.C + ")?" + r.V + r.C), r.M_eq_1 = new RegExp("^(" + r.C + ")?" + r.V + r.C + "(" + r.V + ")?$"), r.M_gr_1 = new RegExp("^(" + r.C + ")?" + r.V + r.C + r.V + r.C), r.v_in_stem = new RegExp("^(" + r.C + ")?" + r.v), r.nonstd_S = /^(.+?)(ss|i)es$/, r.std_S = /^(.+?)([^s])s$/, r.E = /^(.+?)e$/, r.LL = /ll$/, r.EED = /^(.+?)eed$/, r.ED_or_ING = /^(.+?)(ed|ing)$/, r.Y = /^(.+?)y$/, r.nonstd_gp1 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, r.nonstd_gp2 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, r.nonstd_gp3 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, r.S_or_T_with_ION = /^(.+?)(s|t)(ion)$/, r.has_C_and_v_but_doesnt_end_with_AEIOUWXY = new RegExp("^" + r.C + r.v + "[^aeiouwxy]$")
}, function (e, r, t) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.suffixList = {
		group1: {
			ational: "ate",
			tional: "tion",
			enci: "ence",
			anci: "ance",
			izer: "ize",
			bli: "ble",
			alli: "al",
			entli: "ent",
			eli: "e",
			ousli: "ous",
			ization: "ize",
			ation: "ate",
			ator: "ate",
			alism: "al",
			iveness: "ive",
			fulness: "ful",
			ousness: "ous",
			aliti: "al",
			iviti: "ive",
			biliti: "ble",
			logi: "log"
		},
		group2: {
			icate: "ic",
			ative: "",
			alize: "al",
			iciti: "ic",
			ical: "ic",
			ful: "",
			ness: ""
		}
	}
}]);