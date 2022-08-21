CREATE DATABASE study_user_information DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE study_user_information;

CREATE TABLE user_information(
	user_id VARCHAR(300) NOT NULL PRIMARY KEY,
    user_name CHAR,
    user_age INT,
    user_pw VARCHAR(500) NOT NULL
);

CREATE TABLE user_part(
	user_id CHAR NOT NULL,
    user_part CHAR,
    FOREIGN KEY(user_id) REFERENCES user_information(user_id)
);
CREATE TABLE study(
	study_number INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    study_name TEXT,
    explanation TEXT,
    rule TEXT,
    mento_presence BOOL,
    study_president_id CHAR NOT NULL,
    study_start_date DATE,
    open_chat_link TEXT,
    FOREIGN KEY(study_president_id) REFERENCES user_information(user_id)
);
CREATE TABLE study_tag(
	study_number INT NOT NULL,
    study_tag CHAR,
    FOREIGN KEY(study_number) REFERENCES study(study_number)
);

#연동확인코드
#INSERT INTO user_information(user_id, user_pw) VALUES ('sion0104', '1599');
#SELECT user_pw FROM user_information WHERE user_id = 'sion0104';
