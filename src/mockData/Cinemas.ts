

export interface Cinema {
  id: number;
  title: string;
  releasedDate: string;
  description: string;
  director: string,
  youtubeId: string | null,
  amazonLink: string | null,
  amazonImageLink: string | null,
  shareDescription: string;
}

export const Cinemas: Cinema[] = [
  {
    "id": 1,
    "title": "パンズ・ラビリンス",
    "releasedDate": "2006年",
    "description": "内戦、暴力、高圧的な父親……そんな現実を抜け出し、自分の本当の居場所であるファンタジーの王国に帰るため、少女は暗い夜の森で出会った古代の神の指示の下、内なる世界での試練に立ち向かいます。自分の心の無垢さを大事にしているあなたなら、きっと自分の王国へ帰還できるはず。",
    "director": "ギレルモ・デル・トロ",
    "youtubeId": "Elwo1hfk9X8",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "自分の心の無垢さを大事にしているあなたにおすすめの映画は『パンズ・ラビリンス』です。"
  },
  {
    "id": 2,
    "title": "シェイプ・オブ・<br />ウォーター",
    "releasedDate": "2017年",
    "description": "現実はほんとうにひどいところで、嫌な奴がのさばっています。そんな世界にも染まらず生きるあなたは、この映画の中で魂の双子に出会うでしょう。苦しむ魂同士が惹かれあい、現実世界に反旗を翻すのを応援しましょう。",
    "director": "ギレルモ・デル・トロ",
    "youtubeId": "M-C9y3Vhd0M",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "現実に反旗を翻したいあなたにおすすめの映画は『シェイプ・オブ・ウォーター』です。"
  },
  {
    "id": 3,
    "title": "エヴォリューション",
    "releasedDate": "2016年",
    "description": "あなたはもしかして、この世界に閉じ込められているような閉塞感を覚えてはいませんか？　この映画の舞台は絶海の孤島、そこで暮らす少年たちは謎の医療行為の被験体にされ、女性たちは夜な夜なランプを手に海辺に集います。この世がひとつの監獄であることを、おぞましくも幻想的に暴き出すこの映画に溺れましょう。",
    "director": "ルシール・アザリロヴィック",
    "youtubeId": "zaRnsszvMsA",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "この世界に閉じ込められているような閉塞感を覚えているあなたにおすすめの映画は『エヴォリューション』です。"
  },
  {
    "id": 4,
    "title": "エコール",
    "releasedDate": "2006年",
    "description": "この結果に辿り着いたあなたは、「子供時代」に対してアンビバレントな思いを抱いてはいませんか？　そんなあなたに贈るのは、蝶と蛹のモチーフが繰り返し現れるこの映画。森の奥の謎の寄宿舎に幽閉された少女たちは、大人と子供、生と死のはざまで踊り、あなたを終わらない子供時代に誘い込みます。",
    "director": "ルシール・アザリロヴィック",
    "youtubeId": "shVCe9EiRwU",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "「子供時代」に対してアンビバレントな思いを抱いているあなたにおすすめの映画は『エコール』です。"
  },
  {
    "id": 5,
    "title": "べニスに死す",
    "releasedDate": "1971年",
    "description": "この結果に行き着いたあなたは、もう現実に戻る必要はありません。長い長い旅に出る準備ができたら、美の化身を追って、アドリア海の光の戯れにじっと目を凝らし、誰にも気づかれぬまま、あなたが密かに夢見ていた永遠を心ゆくまで味わいましょう。",
    "director": "ルキノ・ヴィスコンティ",
    "youtubeId": "P8snvOmA0Rc",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "密かに永遠を夢見ていたあなたにおすすめの映画は『ヴェニスに死す』です。"
  },
  {
    "id": 6,
    "title": "サタンタンゴ",
    "releasedDate": "1994年",
    "description": "時間の塊に殴られるような、圧倒的な7時間18分。延々と歩き続ける牛の群れ、同じものをひたすらに映し続けるカメラ、人々の長い沈黙、不穏な気配。この映画の外に現実なんてないような気分になって、白黒の静寂の世界に心を吸われましょう。",
    "director": "タル・ベーラ",
    "youtubeId": "6YALvMVhT6k",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "静寂の世界に心を吸われたいあなたにおすすめの映画は『サタンタンゴ』です。"
  },
  {
    "id": 7,
    "title": "ニーチェの馬",
    "releasedDate": "2011年",
    "description": "この壁の外の現実世界は、吹き荒れる風にさらわれて滅んでしまいました。あなたはここで、深い沈黙に沈みながら、降りてくる夜の帳と、じきに来る世界の終わりを待っています。頭を悩ませるのをやめて、静寂に身を委ねましょう。",
    "director": "タル・ベーラ",
    "youtubeId": "HOSb_lG-W74",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "静寂に心が騒ぐあなたにおすすめの映画は『ニーチェの馬』です。"
  },
  {
    "id": 8,
    "title": "大いなる沈黙へ",
    "releasedDate": "2005年",
    "description": "俗世間から隔絶されたフランスのグランド・シャルドルーズ修道院の暮らしを、音楽もナレーションも照明もなしで映し出した異色のドキュメンタリー。ほとんど口を利かず、神との対話の中で生きる修道士たちとともに、あなたも深い静寂の中で心を洗われる体験をすることでしょう。",
    "director": "フィリップ・グレーニング",
    "youtubeId": "vU9FTzbl6Z0",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "俗世間から離れたいあなたにおすすめの映画は『大いなる沈黙へ』です。"
  },
  {
    "id": 9,
    "title": "グランド・<br />ブダペスト・ホテル",
    "releasedDate": "2014年",
    "description": "楽しいものが観たいあなたには、軽快な音楽と、パステルカラーの色合い、洒脱なユーモアとウィット、わくわくする冒険とミステリー、あたたかな人情味とノスタルジーを詰め合わせたかわいいお菓子の箱みたいなこの映画がおすすめ。ひとつまみの切なさと一緒にどうぞ。",
    "director": "ウェス・アンダーソン",
    "youtubeId": "fV3a3Nq-viQ",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "楽しいものが見たいあなたにはおすすめの映画は『グランド・ブダペスト・ホテル』です。"
  },
  {
    "id": 10,
    "title": "ムード・インディゴ<br />うたかたの日々",
    "releasedDate": "2013年",
    "description": "ピアノを弾くと音色に合わせてカクテルを調合してくれるカクテル・ピアノ、雲に乗って街の上の散歩……青春のきらめきと薔薇色の多幸感に溢れた、美しく奇想天外な世界で遊ぶのはいかが？　そこでは悲しみさえも、肺に睡蓮の花が咲くという美しい形で起こるのです。",
    "director": "ミシェル・ゴンドリー",
    "youtubeId": "LEbDOiUNTdM",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "美しいものが見たいあなたにおすすめの映画は『ムード・インディゴ　うたかたの日々』です。"
  },
  {
    "id": 11,
    "title": "ローマの休日",
    "releasedDate": "1953年",
    "description": "同じことを繰り返す毎日に疲れたら、日常から抜け出して気分転換に出かけましょう。元気になったらまたちゃんと自分の暮らしに戻ろうと思える意志の強さと、軽やかさを兼ね備えたあなたには、この映画がぴったりです。",
    "director": "ウィリアム・ワイラー",
    "youtubeId": "D0uXOxB22Lk",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "意志の強さと、軽やかさを兼ね備えたあなたにおすすめの映画は『ローマの休日』です。"
  },
  {
    "id": 12,
    "title": "ネバーエンディング・<br />ストーリー",
    "releasedDate": "1984年",
    "description": "現実世界の自分が嫌なあなたには、異世界で自分を変える経験を。いじめられっ子のバスチアンとともに、ファンタージェンを見に行きましょう。異世界を見て帰って来たあなたは、きっとそれまでとは違う存在になっているはず。",
    "director": "ウォルフガング・ペーターゼン",
    "youtubeId": null,
    "amazonLink": "https://www.amazon.co.jp/dp/B000BTCMKQ/ref=cm_sw_r_tw_dp_U_x_mx1.Db856575M",
    "amazonImageLink": "https://images-na.ssl-images-amazon.com/images/I/517%2Bw2ZwCLL._AC_.jpg",
    "shareDescription": "現実世界の自分が嫌なあなたにおすすめの映画は『ネバーエンディング・ストーリー』です。"
  },
  {
    "id": 13,
    "title": "ロード・オブ・ザ・<br />リング",
    "releasedDate": "2001〜2003年",
    "description": "異世界に行ってみたいなら、「中つ国」はどうでしょう。エルフやドワーフ、魔法使い、そしてホビットといった仲間たちとともに、美しく雄大な景色の中を旅し、神話的な物語に耳を傾け、恐ろしい生き物たちと戦い、神秘的な森で心を憩わせてみては？　一歩足を踏み入れたら、あなたも中つ国の住人です。",
    "director": "ピーター・ジャクソン",
    "youtubeId": "vFM4Y6kKCks",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "異世界に行ってみたいあなたにおすすめの映画は『ロード・オブ・ザ・リング』です。"
  },
  {
    "id": 14,
    "title": "マッドマックス<br />怒りのデスロード",
    "releasedDate": "2015年",
    "description": "嫌な現実と真っ向から戦う強さを持ったあなたは、この映画で自分の怒りを解放し、勝利の痛快さを存分に味わって。周り中を敵に回しても、一度は絶望に陥っても、壁を打ち壊す力と勇気を手に入れましょう。",
    "director": "ジョージ・ミラー",
    "youtubeId": "4Krw9BbjzKQ",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "嫌な現実と真っ向から戦う強さを持ったあなたにおすすめの映画は『マッドマックス　怒りのデスロード』です。"
  },
  {
    "id": 15,
    "title": "オーシャンズ8",
    "releasedDate": "2018年",
    "description": "仲間と楽しみたいあなたは、この映画で最高にゴージャスな現実逃避を。ファッションと宝石と、かっこいい女性たちを二時間見れば自然と元気が出てくるはず。友達と見るのもおすすめです。ついでにパーティーも開いてしまいましょう。",
    "director": "ゲイリー・ロス",
    "youtubeId": "wQk7pTJo9SI",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "仲間と楽しみたいあなたにおすすめの映画は『オーシャンズ8』です。"
  },
  {
    "id": 16,
    "title": "花の影",
    "releasedDate": "1996年",
    "description": "最後の質問で東を選んだあなたは、魔都と呼ばれた1920年代の上海、そして蘇州に誘われます。退廃的で破滅的な恋愛を巡る物語ですが、そんな物語はそこかしこに溢れていたのだろうなと思わせる、当時の上海の雰囲気がこの映画の一番の主人公です。",
    "director": "チェン・カイコー",
    "youtubeId": null,
    "amazonLink": "https://www.amazon.co.jp/dp/B008CB8WPY/ref=cm_sw_r_tw_dp_U_x_yLoaEbN9ED4QG",
    "amazonImageLink": "https://images-na.ssl-images-amazon.com/images/I/A1H1VRPtUyL._SL1500_.jpg",
    "shareDescription": "1920年代の東を選んだあなたにおすすめの映画は『花の影』です。"
  },
  {
    "id": 17,
    "title": "惑星ソラリス",
    "releasedDate": "1972年",
    "description": "空間を移動したいなら、一風変わった宇宙旅行はいかがでしょう。この宇宙旅行にはありふれたアクションや冒険はない代わりに、未知の惑星ソラリスの「海」との対話が待っています。「海」の魅力に囚われてしまったあなたには、SF小説の金字塔、レムによる原作『ソラリス』もおすすめ。",
    "director": "アンドレイ・タルコフスキー",
    "youtubeId": null,
    "amazonLink": "https://www.amazon.co.jp/dp/B00A3NNIV2/ref=cm_sw_r_tw_dp_U_x_k10.DbQJV3WHT",
    "amazonImageLink": "https://images-na.ssl-images-amazon.com/images/I/61G89H5EZTL._SY606_.jpg",
    "shareDescription": "旅がしたいあなたにおすすめの映画は『惑星ソラリス』です。"
  },
  {
    "id": 18,
    "title": "アンダーグラウンド",
    "releasedDate": "1995年",
    "description": "登場人物たちのあとをなぜか楽隊がついて歩き、BGMをかき鳴らすこの映画は、祝祭的な馬鹿騒ぎと荒唐無稽さに満ちています。それでいながらユーゴスラヴィアの現代史と人間模様を骨太に描き出すこの映画に、あなたは笑ったり泣いたりするでしょう。",
    "director": "エミール・クストリッツァ",
    "youtubeId": "QzWOYvrfCPI",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "自分の背後で音楽が鳴っているというあなたにおすすめの映画は『アンダーグラウンド』です。"
  },
  {
    "id": 19,
    "title": "マリー・<br />アントワネット",
    "releasedDate": "2006年",
    "description": "自分が女王だとわかっているあなたの現実逃避には、パステルカラーのマカロンとシャンパンが必須です。仮面舞踏会で朝まで踊り、誕生日には宮殿で友達と朝日を眺める。甘くお洒落なヴェルサイユでの暮らしを、マリー・アントワネットとともに駆け抜けましょう。",
    "director": "ソフィア・コッポラ",
    "youtubeId": null,
    "amazonLink": "https://www.amazon.co.jp/dp/B000P7VOJY/ref=cm_sw_r_tw_dp_U_x_0x1.DbMH8X9QA",
    "amazonImageLink": "https://images-na.ssl-images-amazon.com/images/I/51C2CENCGgL._AC_.jpg",
    "shareDescription": "自分が女王だとわかっているあなたにおすすめの映画は『マリー・アントワネット』です。"
  },
  {
    "id": 20,
    "title": "王妃マルゴ",
    "releasedDate": "1994年",
    "description": "現実逃避をするにも誇り高さを隠せないあなたは、16世紀、ユグノー戦争の頃のフランスでもきっと生き残れるでしょう。絢爛な装飾に隠された毒殺や争い、流血の生臭さ、そして歴史の奔流に飲まれながらも情熱的に生きるマルゴを見ているうちに、どんな現実でも乗り越えられるエネルギーをもらえます。",
    "director": "パトリス・シェロー",
    "youtubeId": "JjFZ7gErZ1o",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "現実逃避をするにも誇り高さを隠せないあなたにおすすめの映画は『王妃マルゴ』です。"
  },
  {
    "id": 21,
    "title": "白痴",
    "releasedDate": "1951年",
    "description": "主人公になりたくないのにいつしか物語に巻き込まれてしまう、この映画はそんなあなたにぴったりです。原作はドストエフスキーの『白痴』ですが、本作は舞台が昭和20年代の異国情緒溢れる札幌に移され、今はなき氷上カーニバルも映し出されます。幻想的な冬の街に見入っているうちに、あなたは原節子演じる那須妙子に出会ってしまう。",
    "director": "黒澤明",
    "youtubeId": null,
    "amazonLink": "https://www.amazon.co.jp/dp/B009YDADJW/ref=cm_sw_r_tw_dp_U_x_Qe1.DbTKQZP27",
    "amazonImageLink": "https://images-na.ssl-images-amazon.com/images/I/41ZF68BWZ4L._AC_.jpg",
    "shareDescription": "主人公になりたくないのにいつしか物語に巻き込まれてしまうあなたにおすすめの映画は『白痴』です。"
  },
  {
    "id": 22,
    "title": "落下の王国",
    "releasedDate": "2006年",
    "description": "言葉の力を信じるあなたにおすすめなのは、物語の力をめぐるこの映画。傷付いた青年が、病院で知り合った少女に自殺の片棒を担がせるため、作り話を語り始めます。子供騙しのはずのお伽話は、しかしいつしか壮大な物語へと変わり、現実をも変えていくのです。多数の世界遺産を舞台にした映像美も楽しんで。",
    "director": "ターセム・シン",
    "youtubeId": "53IdeMxih9k",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "言葉の力を信じるあなたにおすすめの映画は『落下の王国』です。"
  },
  {
    "id": 23,
    "title": "ざくろの色",
    "releasedDate": "1969年",
    "description": "言葉の力を信じるあなたには、アルメニアの詩人サヤト＝ノヴァの詩的世界と生涯を、見たこともないような映像美で再現したこの映画がおすすめ。サヤト＝ノヴァの言葉のイメージがアルメニアの色彩と重なり、広がり、螺旋を描いて飛翔する。繰り返し吟唱されるサヤト＝ノヴァの言葉がなんとも耳に心地よい。",
    "director": "セルゲイ・パラジャーノフ",
    "youtubeId": null,
    "amazonLink": "https://www.amazon.co.jp/dp/B079HVBN15/ref=cm_sw_r_tw_dp_U_x_Im1.DbE1EJHYV",
    "amazonImageLink": "https://images-na.ssl-images-amazon.com/images/I/81Dqs4jAMGL._SL1500_.jpg",
    "shareDescription": "言葉の力を信じるあなたにおすすめの映画は『ざくろの色』です。"
  },
  {
    "id": 24,
    "title": "オーケストラ! ",
    "releasedDate": "2009年",
    "description": "かつて天才指揮者といわれたが、不当に解雇され今はボリショイ劇場で清掃員をしている男が、昔のオーケストラの団員たちを呼び集め、パリで一夜限りの復活公演を成し遂げるまでの物語。彼らが奏でるチャイコフスキーのヴァイオリン協奏曲を聴いていると、なんだってできると思えてくる。",
    "director": "ラデュ・ミヘイレアニュ",
    "youtubeId": "jyxtWUsvBBM",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "かつての栄光を取り戻したいあなたにおすすめの映画は『オーケストラ!』です。"
  },
  {
    "id": 25,
    "title": "スター・ウォーズ<br />（シリーズ）",
    "releasedDate": "1977年〜",
    "description": "「遠い未来」を選んだのに、遠い昔の遥か彼方の銀河の物語に辿り着いてしまいましたね。でも、この巨大なスペース・オペラほど現実逃避に適したものもありません。シリーズ全体を通して見れば、一人（一匹）くらいは自分に似たキャラクターが見つかるかも。フォースとともにあれ！",
    "director": "ジョージ・ルーカス他",
    "youtubeId": "yFh16YJ0fAQ",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "遠い未来に行ってみたいあなたにおすすめの映画は『スター・ウォーズ』です。"
  },
  {
    "id": 26,
    "title": "女王陛下のお気に入り",
    "releasedDate": "2018年",
    "description": "信じられるのは自分だけ。現実の荒波に飲まれていつしかそんな気がしてきたあなたには、この映画をおすすめします。心身が不安定なアン女王と、そんな女王に取り入って出世の機会を狙うアビゲイルの物語。この映画を見終えたときに何を思うかによって、自分の本当の望みに気付けるかもしれません。",
    "director": "ヨルゴス・ランティモス",
    "youtubeId": "YG8UgKURiOo",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "信じられるのは自分だけ。現実の荒波に飲まれていつしかそんな気がしてきたあなたにおすすめの映画は『女王陛下のお気に入り』です。"
  },
  {
    "id": 27,
    "title": "ボーダー<br />二つの世界",
    "releasedDate": "2018年",
    "description": "自分の住む世界に馴染めず、孤独を抱えながらも、この世を呪ったりはしない優しさを持つあなたに贈る、現代のおとぎ話。北欧の街と森を舞台に、人間社会の境界線（ボーダー）上に生きる者が同じ魂を持つ者に出会い、心を揺さぶられます。一緒に世界の境界線を破りましょう。",
    "director": "アリ・アッバシ",
    "youtubeId": "hCf6pRo97E0",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "孤独を抱えながらもこの世を呪ったりはしない優しさを持つあなたにおすすめの映画は『ボーダー　二つの世界』です。"
  },
  {
    "id": 28,
    "title": "神と共に<br />（シリーズ）",
    "releasedDate": "2017年",
    "description": "異世界に行きたいあなたが迷い込んだのは、死後の世界。人間離れしたスタイリッシュさやキュートさを持つ冥界の使者たちが案内人です。壮大な景色や華々しいアクションに魅せられながら、無事に七つの地獄を通過し、生まれ変わりの資格を手に入れましょう！",
    "director": "キム・ヨンファ",
    "youtubeId": "_GMFbkIY9HE",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "異世界に行きたいあなたにおすすめの映画は『神と共に（シリーズ）』です。"
  },
  {
    "id": 29,
    "title": "コードネーム<br />u.n.c.l.e.",
    "releasedDate": "2015年",
    "description": "楽しいものが見たいなら、最高にスタイリッシュなスパイアクションがおすすめ。犬猿の仲だったアメリカ側とソ連側のスパイが、ひょんなことから手を結ぶことになってしまって……？　どたばたしながらもクールにミッションをこなすスパイたちと一緒にすかっとしましょう。",
    "director": "ガイ・リッチー",
    "youtubeId": "KrJy0HRivdY",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "楽しいものが見たいあなたにおすすめの映画は『コードネーム u.n.c.l.e.』です。"
  },
  {
    "id": 30,
    "title": "ブレンダンと<br />ケルズの秘密",
    "releasedDate": "2009年",
    "description": "これは世界一美しい書物をめぐる冒険譚。中世アイルランドの島を舞台に、少年修道士は聖なる書物を完成させるために奮闘します。世界そのものを一冊の美しい書物のように描き出す絵にも注目です。",
    "director": "トム・ムーア",
    "youtubeId": "LFx3SaSOJTw",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "好きなことに没頭してストレスを発散したいあなたにおすすめの映画は『ブレンダンとケルズの秘密』です。"
  },
  {
    "id": 31,
    "title": "バーフバリ<br />（シリーズ）",
    "releasedDate": "2015〜2017年",
    "description": "とにかく強くてかっこいい英雄を見たら、あなたの気分もすっきりするかも。神話的なスケールの大きさと華やかなアクション、そしてインド映画にはつきもののミュージカルで盛り上がりましょう。",
    "director": "S・S・ラージャマウリ",
    "youtubeId": "5mFYFkdAqKY",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "とにかく強くてかっこいい英雄を見たいあなたにおすすめの映画は『バーフバリ（シリーズ）』です。"
  },
  {
    "id": 32,
    "title": "インランド・<br />エンパイア",
    "releasedDate": "2006年",
    "description": "映画の中に映画が登場し、役柄と現実が混ざり合い、五つの世界が交錯する難解な映画。幾重もの入れ子構造になった映画の迷宮で、あなたは自分がどこにいるのかわからなくなるはず。果たしてあなたはちゃんと帰って来られるでしょうか。",
    "director": "デヴィッド・リンチ",
    "youtubeId": "XXfT-jhOiVM",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "現実に戻りたくないあなたにおすすめの映画は『インランド・エンパイア』です。"
  },
  {
    "id": 33,
    "title": "マルホランド・<br />ドライブ",
    "releasedDate": "2001年",
    "description": "現実なのか夢なのか、回想なのか妄想なのかわからない。映画の都ハリウッドを舞台に、二人の女性の哀しい愛憎が交錯し、存在と非在のはざまに落ち込んでいくこの映画を観れば、あなたも虚実の境がわからなくなるはず。",
    "director": "デヴィッド・リンチ",
    "youtubeId": "F3FH_v3X3Xo",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "怖いものが見たいあなたにおすすめの映画は『マルホランド・ドライブ』です。"
  },
  {
    "id": 34,
    "title": "ミッドナイト・イン・<br />パリ",
    "releasedDate": "2011年",
    "description": "最後の質問で西を選んだあなたには、1920年代のパリが待っています。スコット・フィッツジェラルドやコクトー、ヘミングウェイ、ピカソにダリなど、会えるものなら一度は会ってみたい芸術家たちが、自分と気さくに話してくれる夢のような時間。100年前の夜と現実の夜が交差してしまう、そんなことがパリでは時々起こるものです。",
    "director": "ウディ・アレン",
    "youtubeId": "_cgX7pnR-xM",
    "amazonLink": null,
    "amazonImageLink": null,
    "shareDescription": "1920年代の西を選んだあなたにおすすめの映画は『ミッドナイト・イン・パリ』です。"
  },
  {
    "id": 35,
    "title": "アリス",
    "releasedDate": "1988年",
    "description": "三月ウサギを追いかけてあなたが入り込むのは『不思議の国のアリス』の世界……よりももっと奇妙で、不気味で、毒のある世界かもしれません。あるいは子供の時あなたの家にあった、開かずの扉の向こうの世界かもしれません。この映画を観終わった後は、見慣れたはずの世界が奇妙に思えてきてしまうはずです。",
    "director": "ヤン・シュヴァンクマイエル",
    "youtubeId": null,
    "amazonLink": "https://www.amazon.co.jp/dp/B00553VYFM/ref=cm_sw_r_tw_dp_U_x_Pr1.DbE900GHS",
    "amazonImageLink": "https://images-na.ssl-images-amazon.com/images/I/819iZLAu1WL._SY606_.jpg",
    "shareDescription": "主人公になりたいあなたにおすすめの映画は『アリス』です。"
  },
  {
    "id": 36,
    "title": "ファウスト",
    "releasedDate": "1994年",
    "description": "迷い込んだ楽屋で『ファウスト』の台本を読んでいるだけのはずが、いつの間にか舞台に上がってしまい、いつの間にか『ファウスト』の世界が現実に侵入してきて……これはそんな男の物語であり、この映画を観ているうちに映画の世界に引きずり込まれてしまうあなたの物語でもあるのです。",
    "director": "ヤン・シュヴァンクマイエル",
    "youtubeId": null,
    "amazonLink": "https://www.amazon.co.jp/dp/B00077DAXK/ref=cm_sw_r_tw_dp_U_x_yw1.Db77B6HQY",
    "amazonImageLink": "https://images-na.ssl-images-amazon.com/images/I/51GVGMFRQJL._AC_.jpg",
    "shareDescription": "主人公になりたくないのになってしまうあなたにおすすめの映画は『ファウスト』です。"
  }
];