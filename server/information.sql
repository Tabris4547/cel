#데이터 베이스 삭제
DROP DATABASE study_user_information;
#데이터베이스 생성
CREATE DATABASE study_user_information DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE study_user_information;
#테이블 생성
CREATE TABLE user_information(
	user_id VARCHAR(200) NOT NULL PRIMARY KEY,
    user_name CHAR(100) NOT NULL,
    user_age INT,
    user_pw VARCHAR(500) NOT NULL
);

CREATE TABLE user_part(
	user_id VARCHAR(200) NOT NULL,
    user_part CHAR(100),
    FOREIGN KEY(user_id) REFERENCES user_information(user_id)
);
CREATE TABLE study(
	study_number INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    study_name TEXT,
    explanation TEXT,
    rule TEXT,
    mento_presence BOOL,
    study_president_id VARCHAR(200) NOT NULL,
    study_start_date DATE,
    open_chat_link TEXT,
    FOREIGN KEY(study_president_id) REFERENCES user_information(user_id)
);
CREATE TABLE study_tag(
	study_number INT NOT NULL,
    study_tag CHAR(100),
    FOREIGN KEY(study_number) REFERENCES study(study_number)
);
