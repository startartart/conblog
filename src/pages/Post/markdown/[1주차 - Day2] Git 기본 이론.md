# [1주차 - Day2] Git 기본 이론

## 4월 9일 과제제출

> 오늘 배운 내용까지 학습한 내용 개인 블로그 또는 **개인 노션**에 정리해서 제출

> 필수 포함 내용 : VSCODE에 test.txt 파일이 아닌 본인이름 (ex :duna.txt) 파일생성하여 터미널에 git 명령어 실습한 화면 캡쳐, 깃 히스토리 설치된 실습 화면 캡쳐

<aside>
💡 제출방법 : 필수 포함 내용과 오늘 배운 점 요약 작성, 캡쳐본 제출

</aside>

### Git, Github

- 깃은 로컬 시스템으로, 버전을 관리 해주는 시스템이자, 깃허브와 소통하는 시스템이다.
- 깃허브는 원격 컴퓨터에서 백업을 담당하는 시스템이며, Git과는 별개로 버전 관리를 해주는 서비스이다.

### CLI(Command Line Interface), GUI(Graphic User Interface)

- `CLI`란 셸에서 글자를 입력해서 컴퓨터에게 명령을 내릴수 있는 인터페이스이다.
  `ex) MS DOS, cmd, bash, terminal, zsh 등`
- `GUI`란 그래픽(사용자에게 화면 제공)을 통해 컴퓨터에게 명령을 내릴 수 있는 인터페이스이다.

### 리눅스 기초 명령어

- `ls` **디렉터리 내** **파일**을 보여준다.
  `ls -a` **디렉터리 내** **숨겨진 파일**을 보여준다.
- `mkdir` **디렉터리** 내 새 **디렉터리**를 생성한다.
- `cd` 현 위치에서 기반하여 다른 디렉터리로 이동한다.
  `cd ..` 한 단계 부모 디렉터리로 이동한다.

### Git 기초 명령어

- `git —version` 현재 Git 버전을 확인할 수 있다.
- `git status` 현재 작업 트리 상태를 확인할 수 있다.
- `git init` Git 저장소를 생성하거나 초기화한다.
- `git add` **스테이징 영역**에 디렉터리 변경 사항을 넘긴다. (파일 트래킹)
- `git commit` Git 저장소에 변경된 내용을 기록한다.
- `git log` 커밋 기록을 볼 수 있다.
- `git remote` 레포지터리와 연동시킬 수 있다.
  `git remote -v` 현재 연동된 레포지터리를 확인할 수 있다.
- VSCODE git 명령어 실습

  ```bash
  /* Use Oh My Zsh */

  ➜  GitCommandTest git init
  Initialized empty Git repository in /Users/byungwon/GitCommandTest/.git/
  ➜  GitCommandTest git:(main) ✗ git remote -v
  ➜  GitCommandTest git:(main) ✗ git add byunggwon.txt
  ➜  GitCommandTest git:(main) ✗ git commit -m "command test"
  [main (root-commit) 2242f10] command test
   1 file changed, 1 insertion(+)
   create mode 100644 byunggwon.txt
  ➜  GitCommandTest git:(main) git status
  On branch main
  nothing to commit, working tree clean
  ➜  GitCommandTest git:(main) git log
  ```
