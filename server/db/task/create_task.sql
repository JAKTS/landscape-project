INSERT into task
  (taskname, taskduedate, tasktime, taskpriority, taskdescription)
values ($1, $2, $3, $4, $5);
