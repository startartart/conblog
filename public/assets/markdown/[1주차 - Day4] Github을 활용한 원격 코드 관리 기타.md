# [1주차 - Day4] Github을 활용한 원격 코드 관리 / Git 브랜치 전략 기반의 협업 워크 플로우

## 4월 11일 과제제출

> 오늘 배운 내용까지 학습한 내용 개인 블로그 또는 **개인 노션**에 정리해서 제출

> 필수 포함 내용 : 깃허브 레포지토리 생성 화면 캡쳐, 깃허브 실습 화면 2~3개 캡쳐

<aside>
💡 제출방법 : 필수 포함 내용과 오늘 배운 점 요약 작성, 캡쳐본 제출

</aside>

### Github Repository

- `git remote` 다음 명령으로 원격저장소와 연결할 수 있다.
- `git push {remoteName} {branchName}` remoteName에 저장된 branchName으로 업로드한다.
- `git clone` 원격저장소 URL에 있는 프로젝트를 가져온다.
- 깃허브 실습
  ![Untitled](%5B1%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20-%20Day4%5D%20Github%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%A7%E1%86%A8%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%20%E1%84%80%E1%85%AA%E1%86%AB%20c98d9c12b15545ba809a3da4bd2b825a/Untitled.png)

  ```bash
  ➜  GitCommandTest git:(main) git remote add origin https://github.com/startartart/RepoTest.git
  ➜  GitCommandTest git:(main) git remote -v
  origin  https://github.com/startartart/RepoTest.git (fetch)
  origin  https://github.com/startartart/RepoTest.git (push)
  ➜  GitCommandTest git:(main) git push origin main
  Enumerating objects: 3, done.
  Counting objects: 100% (3/3), done.
  Writing objects: 100% (3/3), 240 bytes | 240.00 KiB/s, done.
  Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
  To https://github.com/startartart/RepoTest.git
   * [new branch]      main -> main

   # branch 생성 및 이동
   ➜  GitCommandTest git:(main) git checkout -b dev
  Switched to a new branch 'dev'
  ➜  GitCommandTest git:(dev) git branch
  * dev
    main
    ➜  GitCommandTest git:(main) git log -1
  commit 3b5cfa38f8c4253467b408a009742253478dc1d7 (HEAD -> dev, origin/main, main)
  Author: ParkByunggwon <startartart@naver.com>
  Date:   Thu Apr 11 16:52:21 2024 +0900

      create file test2
    ➜  GitCommandTest git:(dev) git checkout main
  Switched to branch 'main'
  ➜  GitCommandTest git:(main)
  ```

  ![Untitled](%5B1%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20-%20Day4%5D%20Github%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%A7%E1%86%A8%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%20%E1%84%80%E1%85%AA%E1%86%AB%20c98d9c12b15545ba809a3da4bd2b825a/Untitled%201.png)
  ![Untitled](%5B1%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20-%20Day4%5D%20Github%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%A7%E1%86%A8%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%20%E1%84%80%E1%85%AA%E1%86%AB%20c98d9c12b15545ba809a3da4bd2b825a/Untitled%202.png)

### Github Token

- 사용자가 Github 리소스에 엑세스하기 위한 것이다.
- 특정 레포지터리에만 엑세스하도록 설정할 수도 있으며, 일반적으로 만료일을 정의한다.

### Git Branch

- 브랜치를 생성하면, 여러 작업환경으로 나누어 개발할 수 있다.
- `git branch` 현재 브랜치 확인
  `git branch {branchName}` 브랜치 생성
- `git checkout {branchName}` 해당 브랜치로 이동한다.
