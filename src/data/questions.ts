import { TestSection } from '../types/test';

export const testSections: TestSection[] = [
  {
    name: 'Vocabulary (語彙)',
    timeLimit: 35,
    questions: [
      {
        id: 1,
        type: 'vocabulary',
        question: 'この____は とても おいしいです。',
        options: ['りんご', 'いす', 'ほん', 'くるま'],
        correct: 0,
        explanation: 'りんご (apple) is the only food item that can be described as おいしい (delicious).'
      },
      {
        id: 2,
        type: 'vocabulary',
        question: 'きのう ____で えいがを みました。',
        options: ['びょういん', 'えいがかん', 'ぎんこう', 'こうえん'],
        correct: 1,
        explanation: 'えいがかん (movie theater) is where you watch movies.'
      },
      {
        id: 3,
        type: 'vocabulary',
        question: 'あした ____と いっしょに かいものに いきます。',
        options: ['ともだち', 'つくえ', 'でんわ', 'かばん'],
        correct: 0,
        explanation: 'ともだち (friend) is the only option that can go shopping with you.'
      },
      {
        id: 4,
        type: 'vocabulary',
        question: 'まいあさ ろくじに ____。',
        options: ['たべます', 'おきます', 'ねます', 'かえります'],
        correct: 1,
        explanation: 'おきます (wake up) is what you do at 6 AM every morning.'
      },
      {
        id: 5,
        type: 'vocabulary',
        question: '____を のんで ください。',
        options: ['パン', 'みず', 'にく', 'さかな'],
        correct: 1,
        explanation: 'みず (water) is the only option you can drink (のむ).'
      },
      {
        id: 6,
        type: 'vocabulary',
        question: 'がっこうで ____を べんきょうします。',
        options: ['にほんご', 'でんしゃ', 'びょういん', 'おかね'],
        correct: 0,
        explanation: 'にほんご (Japanese language) is what you study at school.'
      },
      {
        id: 7,
        type: 'vocabulary',
        question: 'あつい ひは ____を きます。',
        options: ['コート', 'セーター', 'Tシャツ', 'マフラー'],
        correct: 2,
        explanation: 'Tシャツ (T-shirt) is appropriate clothing for hot days.'
      },
      {
        id: 8,
        type: 'vocabulary',
        question: 'つくえの うえに ____が あります。',
        options: ['ほん', 'いぬ', 'くるま', 'やま'],
        correct: 0,
        explanation: 'ほん (book) is a logical item to be on top of a desk.'
      },
      {
        id: 9,
        type: 'vocabulary',
        question: 'あかい ____を かいました。',
        options: ['みず', 'そら', 'はな', 'ゆき'],
        correct: 2,
        explanation: 'はな (flower) can be red. The other options cannot be red by nature.'
      },
      {
        id: 10,
        type: 'vocabulary',
        question: 'でんしゃで ____に いきます。',
        options: ['とうきょう', 'あめ', 'いろ', 'おと'],
        correct: 0,
        explanation: 'とうきょう (Tokyo) is a place you can go to by train.'
      },
      {
        id: 11,
        type: 'vocabulary',
        question: 'よる ____を みます。',
        options: ['たいよう', 'つき', 'あさ', 'ひる'],
        correct: 1,
        explanation: 'つき (moon) is what you see at night.'
      },
      {
        id: 12,
        type: 'vocabulary',
        question: '____で てがみを かきます。',
        options: ['ペン', 'さら', 'コップ', 'くつ'],
        correct: 0,
        explanation: 'ペン (pen) is the tool used for writing letters.'
      },
      {
        id: 13,
        type: 'vocabulary',
        question: 'さむい ときは ____を のみます。',
        options: ['アイスクリーム', 'あつい コーヒー', 'つめたい みず', 'ビール'],
        correct: 1,
        explanation: 'あつい コーヒー (hot coffee) is what you drink when it\'s cold.'
      },
      {
        id: 14,
        type: 'vocabulary',
        question: '____で りょうりを つくります。',
        options: ['おふろ', 'だいどころ', 'しんしつ', 'げんかん'],
        correct: 1,
        explanation: 'だいどころ (kitchen) is where you cook food.'
      },
      {
        id: 15,
        type: 'vocabulary',
        question: 'あしが いたいので ____に いきます。',
        options: ['がっこう', 'びょういん', 'ぎんこう', 'ほんや'],
        correct: 1,
        explanation: 'びょういん (hospital) is where you go when your leg hurts.'
      },
      {
        id: 16,
        type: 'vocabulary',
        question: '____を つかって でんわを かけます。',
        options: ['けいたい', 'テレビ', 'れいぞうこ', 'せんたくき'],
        correct: 0,
        explanation: 'けいたい (mobile phone) is used to make phone calls.'
      },
      {
        id: 17,
        type: 'vocabulary',
        question: 'あめが ふって いるので ____を もって いきます。',
        options: ['かさ', 'ぼうし', 'めがね', 'とけい'],
        correct: 0,
        explanation: 'かさ (umbrella) is what you take when it\'s raining.'
      },
      {
        id: 18,
        type: 'vocabulary',
        question: '____を あらって から たべます。',
        options: ['あたま', 'て', 'あし', 'せなか'],
        correct: 1,
        explanation: 'て (hands) are what you wash before eating.'
      },
      {
        id: 19,
        type: 'vocabulary',
        question: 'しずかな ____で べんきょうします。',
        options: ['ところ', 'おと', 'いろ', 'あじ'],
        correct: 0,
        explanation: 'ところ (place) is where you study quietly.'
      },
      {
        id: 20,
        type: 'vocabulary',
        question: 'はやく ____を おぼえたいです。',
        options: ['かんじ', 'でんき', 'みち', 'かぜ'],
        correct: 0,
        explanation: 'かんじ (kanji) is what you want to memorize quickly.'
      }
    ]
  },
  {
    name: 'Grammar (文法)',
    timeLimit: 40,
    questions: [
      {
        id: 21,
        type: 'grammar',
        question: 'わたし____ がくせいです。',
        options: ['は', 'が', 'を', 'に'],
        correct: 0,
        explanation: 'は is the topic marker used when stating what someone is.'
      },
      {
        id: 22,
        type: 'grammar',
        question: 'きょう あめ____ ふって います。',
        options: ['は', 'が', 'を', 'で'],
        correct: 1,
        explanation: 'が is the subject marker for weather phenomena.'
      },
      {
        id: 23,
        type: 'grammar',
        question: 'ともだち____ てがみを かきました。',
        options: ['は', 'が', 'に', 'で'],
        correct: 2,
        explanation: 'に marks the recipient when writing letters or giving things.'
      },
      {
        id: 24,
        type: 'grammar',
        question: 'えき____ ばんごはんを たべました。',
        options: ['は', 'が', 'を', 'で'],
        correct: 3,
        explanation: 'で marks the location where an action takes place.'
      },
      {
        id: 25,
        type: 'grammar',
        question: 'にほんご____ べんきょうして います。',
        options: ['は', 'が', 'を', 'に'],
        correct: 2,
        explanation: 'を marks the direct object of the verb べんきょうする (to study).'
      },
      {
        id: 26,
        type: 'grammar',
        question: 'らいねん にほん____ いきたいです。',
        options: ['は', 'が', 'を', 'に'],
        correct: 3,
        explanation: 'に marks the destination with movement verbs like いく (to go).'
      },
      {
        id: 27,
        type: 'grammar',
        question: 'きのう ともだち____ あいました。',
        options: ['は', 'が', 'を', 'に'],
        correct: 3,
        explanation: 'に marks the person you meet with the verb あう (to meet).'
      },
      {
        id: 28,
        type: 'grammar',
        question: 'この ほん____ おもしろいです。',
        options: ['は', 'が', 'を', 'に'],
        correct: 0,
        explanation: 'は is the topic marker when describing characteristics of something.'
      },
      {
        id: 29,
        type: 'grammar',
        question: 'だれ____ きましたか。',
        options: ['は', 'が', 'を', 'に'],
        correct: 1,
        explanation: 'が is used with question words like だれ (who).'
      },
      {
        id: 30,
        type: 'grammar',
        question: 'バス____ がっこうに いきます。',
        options: ['は', 'が', 'を', 'で'],
        correct: 3,
        explanation: 'で marks the means of transportation.'
      },
      {
        id: 31,
        type: 'grammar',
        question: 'あした____ にちようびです。',
        options: ['は', 'が', 'を', 'に'],
        correct: 0,
        explanation: 'は is the topic marker when stating what day tomorrow is.'
      },
      {
        id: 32,
        type: 'grammar',
        question: 'いま なんじ____ ですか。',
        options: ['は', 'が', 'を', 'に'],
        correct: 1,
        explanation: 'が is used with question words like なんじ (what time).'
      },
      {
        id: 33,
        type: 'grammar',
        question: 'ここ____ わたしの いえです。',
        options: ['は', 'が', 'を', 'に'],
        correct: 0,
        explanation: 'は is the topic marker when identifying something.'
      },
      {
        id: 34,
        type: 'grammar',
        question: 'せんせい____ しつもんを しました。',
        options: ['は', 'が', 'を', 'に'],
        correct: 3,
        explanation: 'に marks the person to whom you ask a question.'
      },
      {
        id: 35,
        type: 'grammar',
        question: 'つくえの うえ____ ほんが あります。',
        options: ['は', 'が', 'を', 'に'],
        correct: 3,
        explanation: 'に marks the location where something exists.'
      },
      {
        id: 36,
        type: 'grammar',
        question: 'まいにち しんぶん____ よみます。',
        options: ['は', 'が', 'を', 'に'],
        correct: 2,
        explanation: 'を marks the direct object of the verb よむ (to read).'
      },
      {
        id: 37,
        type: 'grammar',
        question: 'きょう____ あつい ひです。',
        options: ['は', 'が', 'を', 'に'],
        correct: 0,
        explanation: 'は is the topic marker when describing today.'
      },
      {
        id: 38,
        type: 'grammar',
        question: 'ともだち____ でんわを かけました。',
        options: ['は', 'が', 'を', 'に'],
        correct: 3,
        explanation: 'に marks the person you call on the phone.'
      },
      {
        id: 39,
        type: 'grammar',
        question: 'どこ____ すんで いますか。',
        options: ['は', 'が', 'を', 'に'],
        correct: 3,
        explanation: 'に marks the location where you live with the verb すむ.'
      },
      {
        id: 40,
        type: 'grammar',
        question: 'この えいが____ みたことが ありません。',
        options: ['は', 'が', 'を', 'に'],
        correct: 2,
        explanation: 'を marks the direct object of the verb みる (to watch).'
      }
    ]
  },
  {
    name: 'Reading (読解)',
    timeLimit: 45,
    questions: [
      {
        id: 41,
        type: 'reading',
        question: 'たなかさんは まいにち しちじに おきます。あさごはんを たべて、くじに がっこうに いきます。がっこうで にほんごを べんきょうします。\n\nたなかさんは なんじに おきますか？',
        options: ['ろくじ', 'しちじ', 'はちじ', 'くじ'],
        correct: 1,
        explanation: 'The text states たなかさんは まいにち しちじに おきます (Tanaka-san wakes up at 7 o\'clock every day).'
      },
      {
        id: 42,
        type: 'reading',
        question: 'きのう ともだちと えいがを みました。えいがは とても おもしろかったです。そのあと レストランで ばんごはんを たべました。\n\nなにを しましたか？',
        options: ['ほんを よみました', 'えいがを みました', 'おんがくを ききました', 'かいものを しました'],
        correct: 1,
        explanation: 'The text clearly states えいがを みました (watched a movie).'
      },
      {
        id: 43,
        type: 'reading',
        question: 'わたしの かぞくは よにんです。ちちと ははと あにと わたしです。ちちは えいごの せんせいです。あには だいがくせいです。\n\nだれが せんせいですか？',
        options: ['わたし', 'はは', 'ちち', 'あに'],
        correct: 2,
        explanation: 'The text states ちちは えいごの せんせいです (father is an English teacher).'
      },
      {
        id: 44,
        type: 'reading',
        question: 'らいしゅう ともだちの たんじょうびです。プレゼントを かいに デパートに いきます。あかい セーターを かう つもりです。\n\nなにを かいますか？',
        options: ['くろい セーター', 'あかい セーター', 'あおい セーター', 'しろい セーター'],
        correct: 1,
        explanation: 'The text states あかい セーターを かう つもりです (planning to buy a red sweater).'
      },
      {
        id: 45,
        type: 'reading',
        question: 'きょうは どようびです。てんきが いいので、こうえんに いきました。そこで ほんを よんだり、おんがくを きいたりしました。\n\nなにを しましたか？',
        options: ['およぎました', 'ほんを よみました', 'かいものしました', 'りょうりしました'],
        correct: 1,
        explanation: 'The text mentions ほんを よんだり (reading books among other activities).'
      },
      {
        id: 46,
        type: 'reading',
        question: 'やまださんは まいあさ コーヒーを のみます。でも きょうは あたまが いたいので、おちゃを のみました。おちゃは からだに いいです。\n\nきょう やまださんは なにを のみましたか？',
        options: ['コーヒー', 'おちゃ', 'みず', 'ジュース'],
        correct: 1,
        explanation: 'The text states きょうは あたまが いたいので、おちゃを のみました (today, because of a headache, drank tea).'
      },
      {
        id: 47,
        type: 'reading',
        question: 'あたらしい アパートは えきから あるいて じゅっぷんです。ちかくに スーパーや びょういんが あります。とても べんりです。\n\nアパートは えきから どのくらいですか？',
        options: ['ごふん', 'じゅっぷん', 'にじゅっぷん', 'さんじゅっぷん'],
        correct: 1,
        explanation: 'The text states えきから あるいて じゅっぷんです (10 minutes walk from the station).'
      },
      {
        id: 48,
        type: 'reading',
        question: 'すずきさんは りょうりが すきです。まいにち ばんごはんを つくります。きょうは カレーを つくりました。とても おいしかったです。\n\nすずきさんは なにが すきですか？',
        options: ['りょうり', 'スポーツ', 'おんがく', 'えいが'],
        correct: 0,
        explanation: 'The text clearly states すずきさんは りょうりが すきです (Suzuki-san likes cooking).'
      },
      {
        id: 49,
        type: 'reading',
        question: 'らいげつ かんこくに いきます。ひこうきで いきます。かんこくごを すこし べんきょうしました。たのしみです。\n\nどうやって かんこくに いきますか？',
        options: ['でんしゃで', 'バスで', 'ひこうきで', 'ふねで'],
        correct: 2,
        explanation: 'The text states ひこうきで いきます (will go by airplane).'
      },
      {
        id: 50,
        type: 'reading',
        question: 'きのうは あめでした。そとに でませんでした。いえで ほんを よんだり、テレビを みたりしました。つまらなかったです。\n\nきのうの てんきは どうでしたか？',
        options: ['はれでした', 'あめでした', 'くもりでした', 'ゆきでした'],
        correct: 1,
        explanation: 'The text starts with きのうは あめでした (yesterday was rainy).'
      },
      {
        id: 51,
        type: 'reading',
        question: 'わたしは まいにち ろくじに おきます。シャワーを あびて、あさごはんを たべます。それから でんしゃで かいしゃに いきます。\n\nまず なにを しますか？',
        options: ['あさごはんを たべます', 'シャワーを あびます', 'でんしゃに のります', 'おきます'],
        correct: 3,
        explanation: 'The first action mentioned is ろくじに おきます (wake up at 6 o\'clock).'
      },
      {
        id: 52,
        type: 'reading',
        question: 'あたらしい せんせいは わかくて やさしいです。せが たかくて、かみが ながいです。いつも あかい ふくを きて います。\n\nせんせいの かみは どうですか？',
        options: ['みじかいです', 'ながいです', 'くろいです', 'しろいです'],
        correct: 1,
        explanation: 'The text states かみが ながいです (hair is long).'
      },
      {
        id: 53,
        type: 'reading',
        question: 'きょうは ともだちの けっこんしきです。あたらしい ドレスを かいました。しゃしんを たくさん とりました。とても たのしかったです。\n\nきょうは なんの ひですか？',
        options: ['たんじょうび', 'けっこんしき', 'そつぎょうしき', 'おまつり'],
        correct: 1,
        explanation: 'The text states きょうは ともだちの けっこんしきです (today is friend\'s wedding).'
      },
      {
        id: 54,
        type: 'reading',
        question: 'あたらしい しごとは たいへんですが、おもしろいです。どようびと にちようびは やすみです。おきゃくさんと はなすのが すきです。\n\nいつが やすみですか？',
        options: ['げつようびと かようび', 'すいようびと もくようび', 'きんようびと どようび', 'どようびと にちようび'],
        correct: 3,
        explanation: 'The text states どようびと にちようびは やすみです (Saturday and Sunday are days off).'
      },
      {
        id: 55,
        type: 'reading',
        question: 'らいねんの なつに にほんに いきます。にほんごを もっと べんきょうしたいです。おてらや じんじゃを みたいです。\n\nいつ にほんに いきますか？',
        options: ['らいねんの はる', 'らいねんの なつ', 'らいねんの あき', 'らいねんの ふゆ'],
        correct: 1,
        explanation: 'The text states らいねんの なつに にほんに いきます (will go to Japan next summer).'
      },
      {
        id: 56,
        type: 'reading',
        question: 'まいしゅう どようびに としょかんに いきます。しずかで べんきょうしやすいです。ほんも たくさん あります。いえより いいです。\n\nどこで べんきょうしますか？',
        options: ['いえ', 'がっこう', 'としょかん', 'こうえん'],
        correct: 2,
        explanation: 'The text states まいしゅう どようびに としょかんに いきます (goes to the library every Saturday).'
      },
      {
        id: 57,
        type: 'reading',
        question: 'あたらしい レストランに いきました。りょうりは おいしかったですが、ちょっと たかかったです。また いきたいです。\n\nりょうりは どうでしたか？',
        options: ['おいしくなかったです', 'おいしかったです', 'やすかったです', 'まずかったです'],
        correct: 1,
        explanation: 'The text states りょうりは おいしかったです (the food was delicious).'
      },
      {
        id: 58,
        type: 'reading',
        question: 'きのうは ともだちと やきゅうを みに いきました。とても おもしろい しあいでした。わたしたちの チームが かちました。\n\nだれが かちましたか？',
        options: ['あいての チーム', 'わたしたちの チーム', 'だれも かちませんでした', 'わかりません'],
        correct: 1,
        explanation: 'The text states わたしたちの チームが かちました (our team won).'
      },
      {
        id: 59,
        type: 'reading',
        question: 'あたらしい くつを かいました。あかくて とても きれいです。でも すこし きついです。あるくと あしが いたくなります。\n\nくつは どうですか？',
        options: ['おおきいです', 'ちいさいです', 'きついです', 'やわらかいです'],
        correct: 2,
        explanation: 'The text states でも すこし きついです (but they are a little tight).'
      },
      {
        id: 60,
        type: 'reading',
        question: 'らいしゅうの きんようびに しけんが あります。まいにち べんきょうして います。むずかしいですが、がんばります。\n\nいつ しけんが ありますか？',
        options: ['らいしゅうの もくようび', 'らいしゅうの きんようび', 'らいしゅうの どようび', 'らいしゅうの にちようび'],
        correct: 1,
        explanation: 'The text states らいしゅうの きんようびに しけんが あります (there is an exam next Friday).'
      }
    ]
  }
];