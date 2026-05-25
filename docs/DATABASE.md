# Database Schema

## User Management

### Users Table
- id (Primary Key)
- email (Unique)
- name
- avatar
- department
- semester
- college_id
- google_id
- role (Super Admin, Club Admin, Event Manager, Faculty, Student, Guest, Alumni)
- status (Active, Inactive, Suspended)
- is_email_verified
- is_2fa_enabled
- created_at
- updated_at

### Roles Table
- id
- name (Unique)
- permissions (Array)

## Events

### Events Table
- id
- title
- description
- category (Seminar, Webinar, Workshop, Hackathon, Competition, Bootcamp, etc.)
- type (Online, Offline, Hybrid)
- status (Draft, Published, Live, Completed, Cancelled)
- thumbnail/banner/poster
- venue_name
- venue_address
- meet_link
- start_date
- end_date
- registration_deadline
- max_seats
- registered_count
- attended_count
- prize
- is_certified
- created_by
- created_at
- updated_at

### EventSpeakers Table
- id
- event_id (Foreign Key)
- name
- title
- bio
- avatar
- email
- linkedin

### EventSponsors Table
- id
- event_id (Foreign Key)
- name
- logo
- website

### FAQ Table
- id
- event_id (Foreign Key)
- question
- answer
- order

## Registrations & Attendance

### Registrations Table
- id
- event_id (Foreign Key)
- user_id (Foreign Key)
- status (Registered, Attended, No-show, Cancelled, Waitlist)
- phone
- department
- semester
- registered_at
- cancelled_at

### Attendance Table
- id
- registration_id (Foreign Key, Unique)
- event_id (Foreign Key)
- user_id (Foreign Key)
- check_in_time
- check_out_time
- duration
- status (Present, Absent, Late, Excused)
- qr_code_token
- checked_in_by

## Certificates

### Certificates Table
- id
- event_id (Foreign Key)
- user_id (Foreign Key)
- certificate_no (Unique)
- qr_code (Unique)
- template_id
- issued_date
- expiry_date
- status (Issued, Revoked, Expired)
- pdf_url
- verification_token (Unique)
- download_count

## Gamification

### Achievements Table
- id
- name (Unique)
- description
- icon
- points
- category

### UserAchievements Table
- id
- user_id (Foreign Key)
- achievement_id (Foreign Key)
- unlocked_at
- (Unique: user_id + achievement_id)

### LeaderboardEntry Table
- id
- user_id (Unique Foreign Key)
- total_points
- rank
- streak
- last_streak_date
- event_points
- achievement_points
- referral_points
- contribution_points

### PointsLog Table
- id
- user_id (Foreign Key)
- points
- action (Event Registration, Attendance, Competition Win, Resource Contribution, Daily Engagement, Referral)
- event_id
- reason
- created_at

## Community

### Resources Table
- id
- title
- description
- type (Notes, PDF, Video, Article, Code, Research Paper, Tutorial)
- url
- file_url
- author_id (Foreign Key)
- category
- tags
- downloads
- is_published
- created_at

### ForumPosts Table
- id
- title
- content
- author_id (Foreign Key)
- category
- tags
- views
- is_pinned
- is_locked
- created_at

### ForumComments Table
- id
- content
- post_id (Foreign Key)
- author_id (Foreign Key)
- likes
- created_at

## Notifications

### Notifications Table
- id
- type (Event Reminder, Registration Confirmed, Attendance Checked, Certificate Issued, Achievement Unlocked, Announcement, etc.)
- title
- message
- data (JSON)
- created_at

### UserNotifications Table
- id
- user_id (Foreign Key)
- notification_id (Foreign Key)
- is_read
- read_at
- created_at

## Analytics

### AnalyticsEvents Table
- id
- event_type (page_view, button_click, form_submit, etc.)
- user_id
- page
- action
- metadata (JSON)
- created_at

### DailyMetrics Table
- id
- date (Unique)
- active_users
- new_users
- new_registrations
- new_attendance
- new_certificates
- top_event
- top_category

## Indexing Strategy

```sql
-- User queries
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);
CREATE INDEX idx_users_created ON users(created_at);

-- Event queries
CREATE INDEX idx_events_category ON events(category);
CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_events_start_date ON events(start_date);

-- Registration queries
CREATE INDEX idx_registrations_event ON registrations(event_id);
CREATE INDEX idx_registrations_user ON registrations(user_id);
CREATE INDEX idx_registrations_status ON registrations(status);

-- Attendance queries
CREATE INDEX idx_attendance_event ON attendance(event_id);
CREATE INDEX idx_attendance_user ON attendance(user_id);
CREATE INDEX idx_attendance_checkin ON attendance(check_in_time);
```

## Relationships

- User → Roles (Many-to-Many)
- User → Registrations (One-to-Many)
- User → Attendance (One-to-Many)
- User → Certificates (One-to-Many)
- User → Achievements (Many-to-Many)
- User → LeaderboardEntry (One-to-One)
- Event → Registrations (One-to-Many)
- Event → Attendance (One-to-Many)
- Event → Certificates (One-to-Many)
- Registration → Attendance (One-to-One)
