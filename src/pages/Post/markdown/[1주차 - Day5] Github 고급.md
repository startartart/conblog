# [1주차 - Day5] Github 고급

## 4월 12일 과제제출

> 오늘 배운 내용까지 학습한 내용 개인 블로그 또는 **개인 노션**에 정리해서 제출

> 필수 포함 내용 : 커밋 히스토리 화면 캡쳐, pr&merge 실습 화면 캡쳐

<aside>
💡 제출방법 : 필수 포함 내용과 오늘 배운 점 요약 작성, 캡쳐본 제출

</aside>

### Git Branch

- 브랜치 이름에 대해선 팀원과의 소통을 위해 미리 정해두는 것이 좋다.
  > 기능개발의 경우 `feature` 출시 준비의 경우 `release` 긴급 수정의 경우 `hotfix` 등 ..
- 커밋이 되기전까지 브랜치 이동은 자유로우며, 병렬적으로 적용된다.
- `git push {GitRepo} {branchName}` : 깃허브 브랜치 생성 및 전송

### Git Flow(= 깃 브랜치 전략)

- **fast-forward** : 메인 브랜치로부터 서브 브랜치를 구현한 다음 메인 브랜치로 합치는 전략
- **3-way** : 두개 이상의 브랜치로부터 각각 구현한 다음 병합하는 전략
  - 일반적으로 병합과정에서 충돌이 일어난다.
- Github에서 브랜치와 브랜치를 병합 시키는 작업을 Pull Request 라고 부른다.
  - Github에서는 충돌이 일어나면 확인할 수 있다.
    `충돌량이 너무 많으면 웹 에디터에서 충돌을 풀 수 없다.`
- 메인 브랜치로 정한 브랜치는 일부 룰을 추가하는 것이 좋다.
  - 최소 리뷰어 설정 등

### 동기화

- `git fetch` 깃허브 레포지터리 브랜치 목록 동기화
- PR이후, 사용된 로컬 브랜치를 삭제하려는 경우(`git branch -d`) 동기화 되어있지 않는다면 경고문을 보여준다. 이때, 병합된 branch로부터 `pull` 한다면 삭제가 가능하다.

  `git branch -D` 옵션을 사용하면 강제로 삭제된다.

- PR&Merge 실습
  ![Untitled](%5B1%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20-%20Day5%5D%20Github%20%E1%84%80%E1%85%A9%E1%84%80%E1%85%B3%E1%86%B8%200635f6ec6aeb4a02b22441dc00d53c6a/Untitled.png)
  ![Untitled](%5B1%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20-%20Day5%5D%20Github%20%E1%84%80%E1%85%A9%E1%84%80%E1%85%B3%E1%86%B8%200635f6ec6aeb4a02b22441dc00d53c6a/Untitled%201.png)
  - feature1, feature2 충돌 해결
  ```
  <<<<<<< feat/2
  feature2
  =======
  feature1
  >>>>>>> main
  ```
  ![Untitled](%5B1%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20-%20Day5%5D%20Github%20%E1%84%80%E1%85%A9%E1%84%80%E1%85%B3%E1%86%B8%200635f6ec6aeb4a02b22441dc00d53c6a/Untitled%202.png)
  - Commit History
    ![Untitled](%5B1%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20-%20Day5%5D%20Github%20%E1%84%80%E1%85%A9%E1%84%80%E1%85%B3%E1%86%B8%200635f6ec6aeb4a02b22441dc00d53c6a/Untitled%203.png)
