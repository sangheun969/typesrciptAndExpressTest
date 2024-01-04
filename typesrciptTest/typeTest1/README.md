#Typescript && express

1. package.json 파일 생성
   프로젝트 폴더 생성하고 해당 경로로 이동한 후에 다음 명령어를 입력

2. TypeScript 설정
   TypeScript 설치
   아래 명령어로 typescript와 typescript 정의 파일을 설치해준다.

- 정의 파일(.d.ts): 모듈의 타입을 알려주기 위한 파일
  정의 파일은 주로 javascript로 작성된 모듈을 사용할 때 필요
  npm i -D typescript @types/express @types/node
  -D flag: 라이브러리가 devDependencies로 설치됨
  devDependencies는 개발할 때 필요한 라이브러리를 의미함
  @types/express를 설치하면 express의 정의 파일이 설치됨

 "esModuleInterop": true,
    // forceConsistentCasingInFileNames 옵션은 TypeScript 컴파일러에서 파일 이름의 대소문자 일관성을 강제로 지정하는 옵션입니다
    "forceConsistentCasingInFileNames": true,
    // skipLibCheck .d.ts 타입 정의 파일에서의 검사를 스킵할 것인지 여부를 지정하는 옵션입니다.
    "skipLibCheck": true
