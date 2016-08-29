create table job(
  JobID serial primary key not null,
  JobName varchar(50),
  JobDueDate varchar(8),
  JobDescription varchar(255),
  JobPriority varchar(10),
  JobImportantNotes varchar(150)
);

create table task(
  TaskID serial primary key not null,
  TaskName varchar(50),
  TaskDueDate varchar(8),
  TaskDescription varchar(255),
  TaskPriority varchar(10),
  TaskImportantNotes varchar(150)
);

create table client(
  ClientID serial primary key not null,
  ClientFirstName varchar(10),
  ClientLastName varchar(15),
  ClientAddress1 varchar(30),
  ClientAddress2 varchar(15),
  ClientCity varchar(30),
  ClientZipCode varchar(7),
  ClientNotes varchar(255)
);

create table user(
  UserID serial primary key not null,
  UserName varchar(20),
  UserPass varchar(20),
  UserEmail varchar(35),
  UserPhone varchar(10),
  UserRole varchar(20)
);
