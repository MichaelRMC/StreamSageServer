\c streamsage_dev;

INSERT INTO streaming_service (name, logo) VALUES 
('Netflix', 'https://images.ctfassets.net/y2ske730sjqp/ 1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940'),
('Hulu', 'https://brandstruck.co/wp-content/uploads/2018/08/Hulu-brand-strategy.jpg'),
('Tubi', 'https://static-prod.adweek.com/wp-content/uploads/2024/02/ tubi-logo-652x342.jpeg'),
('Paramount+', 'https://seeklogo.com/images/P/paramount-logo-D0604AF7D3-seeklogo.com.png'),
('Peacock', 'https://logowik.com/content/uploads/images/peacock7174.jpg'),
('Disney+','https://images.fastcompany.com/image/upload/f_auto,q_auto,c_fit/wp-cms/uploads/2024/03/p-1-91069815-disney-plus-brand-refresh.jpg'),
('Amazon Prime Video','https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png'),
('Apple TV +','https://logowik.com/content/uploads/images/apple-tv-plus8550.jpg'),
('Max','https://assets.teenvogue.com/photos/643802e0c49d934261e35578/master/w_1600%2Cc_limit/230412142855-20230412-business-max-logo.jpeg'),
('Freevee','https://www.newscaststudio.com/wp-content/uploads/2022/04/freevee - logo.png'),
('Starz','https://1000logos.net/wp-content/uploads/2023/02/Starz-logo.png'),
('Crunchyroll','https://images.squarespace-cdn.com/content/v1/546c18a6e4b05a70ad8190fe/1570072348254-DWYPP1G06FC18FAJK2H3/Screen%2BShot%2B2018-02-26%2Bat%2B10.53.26%2BPM.png'),
('Funimation','https://www.theoasg.com/wp-content/uploads/2016/01/FUni.png'),
('Philo','https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Philo_logo.svg/1200px-Philo_logo.svg.png');

COPY title_id(watchmode_id, imdb_id, tmdb_id, tmbd_type, title, year)
FROM '/Users/michaelcaldwell/Desktop/Pursuit/Capstone/title_id_map.csv'
WITH DELIMITER ','
CSV HEADER;

COPY person_id(watchmode_id, imdb_id, tmdb_id)
FROM '/Users/michaelcaldwell/Desktop/Pursuit/Capstone/person_id_map.csv'
WITH DELIMITER ','
CSV HEADER;