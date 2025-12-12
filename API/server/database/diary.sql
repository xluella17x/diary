DROP TABLE IF Exists diary;

create table diary (
    diary_id int generated always as identity,
    entry_title varchar(100) not null,
    date int,
    diary_entry varchar(255)  not null,
    time_of_day varchar(10),
    primary key (diary_id)
);

insert into diary (entry_title,date,diary_entry,time_of_day)
values 
    ('test entry #1',20251212,'First entry body text','afternoon')