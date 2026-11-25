基本の流れ
①VS codeでプログラムを書く
②保存したい変更を選ぶ(Git add)
③変更履歴を記録(git commit -m"変更内容")
④GitHudにアップロード(Git push)

**基本的なコマンド**
- git status                                ファイルの変更状態を確認

- git add .                                 変更したファイルをまとめて追加

- git add ファイル名                    指定したファイルだけ追加

- git commit -m "内容"            変更履歴を保存

- git push                                 GitHubに変更を反映

- git pull                                   GitHubの最新状態を取り込む

- git log                                    過去のコミット履歴を確認

- git diff                                    ファイルの変更内容を確認

**最初の設定で使うコマンド**
- git init                                   Gitの管理を開始

- git clone URL                        GitHubのプロジェクトをコピー

- git remote add origin URL   GitHubと接続

- git remote -v                        接続先を確認

- git branch                            ブランチを確認

- git branch -M main             ブランチ名をmainに変更

- git push -u origin main       初回のプッシュと送信先の設定

**間違えたときに使うコマンド**
- git restore --staged .         addを取り消す

- git restore ファイル名          ファイルの未ステージ変更を取り消す
※ `git restore ファイル名`は編集内容が消えるので注意。

- git diff --staged                コミット予定の変更を確認

- git log --oneline               コミット履歴を短く表示

提出の手順
①git add .

②git commit -m "変更内容"

③git push  

