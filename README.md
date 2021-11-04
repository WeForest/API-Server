# 이게 뭘까 진짜 내가 왜 이걸 하고있는거지

## 실행방법

1. 해당 프로젝트를 `fork` 또는 `zip` 다운받는다.
2. 원하는 위치에 이쁘게 저장해준다.
3. 해당 경로로 들어가서 `yarn`을 입력해준다.

- 없다면 `npm install -g yarn`
- `npm`도 안된다면 노드를 다운받아오자, 물론 설치 이후에 환경변수 설정을 해야한다.

- 환경변수 설정이 귀찮다면 그냥 인터넷에 yarn을 검색해서 다운로드를 받자

4. 다음 루트 디렉터리 안에 `.env`를 생성하자
5. `.env`에 `DATABASE_URL={디코에 공개된 디비 주소}`를 입력하자

- 주소는 `mysql://{id}:{password}@{host address}:{port}/{database name}`

6. `yarn start:dev`를 입력하자.
