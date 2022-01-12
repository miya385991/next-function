# Next.js環境説明

## 準備
1. next.js の環境
   1. create-next-appで環境を用意してください
2. ダミーデータ 
   1. [{json}placeholderのAPIを使用](https://jsonplaceholder.typicode.com/)
   2. [項目Resourcesの　/postsを使用](https://jsonplaceholder.typicode.com/posts)


## 環境変数の用意

まず、初めに `env`もしくは`env.local`ファイル作成します。
※`env.local`使用

env.localに`NEXT_PUBLIC_API_URL= API_URL記述`を記述してください





tailwind＆postCss



Terminal

npx create-next-app my-project
cd my-project

postcss-cli


package.jsonに記述
"build:css":"postcss styles/main.css -o styles/main_browser.css "



postcss.config.jsに行き

テスト用コードを書きビルドできるかを確認する


以下をpostcss.config.jsに記述
module.exports = {
    plugins: [
        require("tailwindcss")
    ]
};

コマンド入力する
yarn run biuld:css


main_browser.cssが作成されtailwindow.cssがbuildされていたらOK



postcss pluginsに"autoprefixer"を追記

yarn add postcss-nestingをインストール