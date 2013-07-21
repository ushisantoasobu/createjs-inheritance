// ネームスペース
// 名前空間の汚染を防ぐため
this.namespace = this.namespace || {};


(function(){

	// コンストラクタ関数
	// new Cat() で呼び出される関数
	/**
	 * コンストラクタ
	 */
	var Cat = function() {
		//
	};


	// static変数
	// すべて大文字
	// 外部から書き換えができてしまうが、すべて大文字であるため外部から書き換えをしないというルールで運用する
	/** 脚の数 */
	Cat.LEGS_COUNT = 4;


	// 継承はプロトタイプに親のインスタンスをセットして行う
	// 継承するものがないときは
	// var p = Cat.prototype;
	/** プロトタイプ */
	var p = Cat.prototype = new namespace.Animal();


	// プライベート変数
	// 先頭にアンダースコアをつける
	// 外部から書き換えができてしまうが、アンダースコアがついているため外部から書き換えをしないというルールで運用する
	/** 名前 */
	p._name;


	// パブリック変数
	/** 体重 */
	p.weight = 0;


	// プライベートメソッド
	// 先頭にアンダースコアをつける
	// 外部から書き換えができてしまうが、アンダースコアがついているため外部から書き換えをしないというルールで運用する
	/**
	 * うずくまる
	 */
	p._crouch = function(){
		//
	};

	// パブリックメソッド
	/**
	 * 名前を取得する
	 * @return 名前
	 */
	p.getName = function() {
		return this._name;
	};

	/**
	 * 名前を設定する
	 * @param name
	 */
	p.setName = function(name) {
		this._name = name;
	};


	// オーバライド
	// オーバライドするときはそのまま定義する（この場合Animalのプロトタイプにwalkという関数が定義されているとする）
	/**
	 * 歩く
	 */
	p.walk = function(){
		//
	};

	// オーバライド時にsuper.xxx()のように書きたいとき
	// 一旦プロトタイプに代入する
	/** 眠る */
	p.Animal_sleep = p.sleep;

	/**
	 * 眠る
	 */
	p.sleep = function(){
		this.Animal_sleep();
		this._crouch();
	};

	// 外部からnamespace.Catでアクセスできるようにする
	namespace.Cat = Cat;
})();