-- /*==============================================================*/
-- /* Table: aa_role                                               */
-- /*==============================================================*/
INSERT INTO `aa_role` (`role_id`,`role_cd`,`role_name`,`note`)
VALUES
(1, 'SA', 'Super admin', null),
(2, 'A', 'Admin', null),
(3, 'AU', 'Authorized user', null),
(4, 'UNA', 'Unathorized user', null);

-- /*==============================================================*/
-- /* Table: aa_profile                                            */
-- /*==============================================================*/
INSERT INTO `aa_profile` (`profile_id`,`profile_cd`,`pswd_life_time`,`pswd_grace_time`,
`pswd_reuse_max`,`login_attempt_max`,`pswd_lock_time`,`pswd_len_min`,`pswd_alphanum`,`pswd_case`)
VALUES
(1, 'DEFAULT', 0, 0,
0, 5, 300000, 6, true, true);



