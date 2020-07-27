# CHANGELOG


## v1.0.1
* Use `gdbots/schemas` v1.6.6.
* Use `triniti/schemas` v1.1.11.


## v1.0.0
* Use `triniti/schemas` v1.1.9.


## v0.2.6
* Use `gdbots/schemas` v1.6.5.
* Use `triniti/schemas` v1.1.8.
* __Add Schemas:__
  * `toofab:canvas:block:tumblr-post-block`
* __Modify Schemas:__ _(no version changes as there is no production use yet)_
  * `toofab:ovp:node:video`
    * Remove mixin `triniti:ovp.medialive:mixin:has-channel:v1`


## v0.2.5
* Use `triniti/schemas` v1.1.6.


## v0.2.4
* Use `gdbots/schemas` v1.6.3.
* Use `triniti/schemas` v1.1.5.


## v0.2.3
* Use `gdbots/schemas` v1.6.2.
* Use `triniti/schemas` v1.1.3.
* __Modify Schemas:__ _(no version changes as there is no production use yet)_
  * `toofab:ovp:node:video`
    * Add mixin `triniti:ovp.medialive:mixin:has-channel:v1`


## v0.2.2
* Use `triniti/schemas` v1.1.2.
* __Add Schemas:__
  * `toofab:canvas:block:spotify-embed-block`
  * `toofab:canvas:block:tiktok-embed-block`


## v0.2.1
* Use `triniti/schemas` v1.1.1.


## v0.2.0
* Use `gdbots/schemas` v1.6.0.
* Use `triniti/schemas` v1.1.0.


## v0.1.5
* Use `triniti/schemas` v1.0.7.
* __Add Schemas:__
  * `toofab:canvas:block:divider-block`
  * `toofab:curator:command:remove-teaser-slotting`
  * `toofab:curator:event:teaser-slotting-removed`
* __Modify Schemas:__ _(no version changes as there is no production use yet)_
  * `toofab:canvas:node:page`
    * Add mixin `triniti:curator:mixin:has-related-teasers:v1`
  * `toofab:news:node:article`
    * Add mixin `triniti:curator:mixin:has-related-teasers:v1`
  * `toofab:ovp:node:video`
    * Add mixin `triniti:curator:mixin:has-related-teasers:v1`


## v0.1.4
* Use `triniti/schemas` v1.0.6.
* __Add Schemas:__
  * `toofab:curator:node:asset-teaser`


## v0.1.3
* Use `triniti/schemas` v1.0.5.


## v0.1.2
* Use `triniti/schemas` v1.0.4.


## v0.1.1
* Use `gdbots/schemas` v1.5.13.
* Use `triniti/schemas` v1.0.3.


## v0.1.0
* __Add Schemas:__
  * __toofab:apollo__
    * `toofab:apollo::poll-answer`
    * `toofab:apollo:command:cast-vote`
    * `toofab:apollo:command:create-poll`
    * `toofab:apollo:command:delete-poll`
    * `toofab:apollo:command:expire-poll`
    * `toofab:apollo:command:mark-poll-as-draft`
    * `toofab:apollo:command:mark-poll-as-pending`
    * `toofab:apollo:command:publish-poll`
    * `toofab:apollo:command:unpublish-poll`
    * `toofab:apollo:command:update-poll`
    * `toofab:apollo:event:poll-created`
    * `toofab:apollo:event:poll-deleted`
    * `toofab:apollo:event:poll-expired`
    * `toofab:apollo:event:poll-marked-as-draft`
    * `toofab:apollo:event:poll-marked-as-pending`
    * `toofab:apollo:event:poll-published`
    * `toofab:apollo:event:poll-scheduled`
    * `toofab:apollo:event:poll-unpublished`
    * `toofab:apollo:event:poll-updated`
    * `toofab:apollo:event:vote-casted`
    * `toofab:apollo:node:poll`
    * `toofab:apollo:request:get-poll-history-request`
    * `toofab:apollo:request:get-poll-history-response`
    * `toofab:apollo:request:get-poll-request`
    * `toofab:apollo:request:get-poll-response`
    * `toofab:apollo:request:search-polls-request`
    * `toofab:apollo:request:search-polls-response`
  * __toofab:boost__
    * `toofab:boost:command:create-sponsor`
    * `toofab:boost:command:delete-sponsor`
    * `toofab:boost:command:expire-sponsor`
    * `toofab:boost:command:mark-sponsor-as-draft`
    * `toofab:boost:command:mark-sponsor-as-pending`
    * `toofab:boost:command:publish-sponsor`
    * `toofab:boost:command:rename-sponsor`
    * `toofab:boost:command:unpublish-sponsor`
    * `toofab:boost:command:update-sponsor`
    * `toofab:boost:event:sponsor-created`
    * `toofab:boost:event:sponsor-deleted`
    * `toofab:boost:event:sponsor-expired`
    * `toofab:boost:event:sponsor-marked-as-draft`
    * `toofab:boost:event:sponsor-marked-as-pending`
    * `toofab:boost:event:sponsor-published`
    * `toofab:boost:event:sponsor-renamed`
    * `toofab:boost:event:sponsor-scheduled`
    * `toofab:boost:event:sponsor-unpublished`
    * `toofab:boost:event:sponsor-updated`
    * `toofab:boost:node:sponsor`
    * `toofab:boost:request:get-sponsor-history-request`
    * `toofab:boost:request:get-sponsor-history-response`
    * `toofab:boost:request:get-sponsor-request`
    * `toofab:boost:request:get-sponsor-response`
    * `toofab:boost:request:search-sponsors-request`
    * `toofab:boost:request:search-sponsors-response`
  * __toofab:canvas__
    * `toofab:canvas:block:article-block`
    * `toofab:canvas:block:audio-block`
    * `toofab:canvas:block:code-block`
    * `toofab:canvas:block:document-block`
    * `toofab:canvas:block:facebook-post-block`
    * `toofab:canvas:block:facebook-video-block`
    * `toofab:canvas:block:gallery-block`
    * `toofab:canvas:block:google-map-block`
    * `toofab:canvas:block:heading-block`
    * `toofab:canvas:block:iframe-block`
    * `toofab:canvas:block:image-block`
    * `toofab:canvas:block:imgur-post-block`
    * `toofab:canvas:block:instagram-media-block`
    * `toofab:canvas:block:page-break-block`
    * `toofab:canvas:block:pinterest-board-block`
    * `toofab:canvas:block:pinterest-pin-block`
    * `toofab:canvas:block:pinterest-profile-block`
    * `toofab:canvas:block:poll-block`
    * `toofab:canvas:block:poll-grid-block`
    * `toofab:canvas:block:quote-block`
    * `toofab:canvas:block:soundcloud-audio-block`
    * `toofab:canvas:block:text-block`
    * `toofab:canvas:block:twitter-collection-timeline-block`
    * `toofab:canvas:block:twitter-follow-button-block`
    * `toofab:canvas:block:twitter-hashtag-button-block`
    * `toofab:canvas:block:twitter-likes-timeline-block`
    * `toofab:canvas:block:twitter-list-timeline-block`
    * `toofab:canvas:block:twitter-mention-button-block`
    * `toofab:canvas:block:twitter-moment-block`
    * `toofab:canvas:block:twitter-search-timeline-block`
    * `toofab:canvas:block:twitter-tweet-block`
    * `toofab:canvas:block:twitter-user-timeline-block`
    * `toofab:canvas:block:twitter-video-block`
    * `toofab:canvas:block:vevo-video-block`
    * `toofab:canvas:block:video-block`
    * `toofab:canvas:block:vimeo-video-block`
    * `toofab:canvas:block:youtube-playlist-block`
    * `toofab:canvas:block:youtube-video-block`
    * `toofab:canvas:command:create-page`
    * `toofab:canvas:command:delete-page`
    * `toofab:canvas:command:expire-page`
    * `toofab:canvas:command:mark-page-as-draft`
    * `toofab:canvas:command:mark-page-as-pending`
    * `toofab:canvas:command:publish-page`
    * `toofab:canvas:command:rename-page`
    * `toofab:canvas:command:unpublish-page`
    * `toofab:canvas:command:update-page`
    * `toofab:canvas:event:page-created`
    * `toofab:canvas:event:page-deleted`
    * `toofab:canvas:event:page-expired`
    * `toofab:canvas:event:page-marked-as-draft`
    * `toofab:canvas:event:page-marked-as-pending`
    * `toofab:canvas:event:page-published`
    * `toofab:canvas:event:page-renamed`
    * `toofab:canvas:event:page-scheduled`
    * `toofab:canvas:event:page-unpublished`
    * `toofab:canvas:event:page-updated`
    * `toofab:canvas:node:page`
    * `toofab:canvas:request:get-page-history-request`
    * `toofab:canvas:request:get-page-history-response`
    * `toofab:canvas:request:get-page-request`
    * `toofab:canvas:request:get-page-response`
    * `toofab:canvas:request:search-pages-request`
    * `toofab:canvas:request:search-pages-response`
  * __toofab:curator__
    * `toofab:curator:command:create-gallery`
    * `toofab:curator:command:create-promotion`
    * `toofab:curator:command:create-teaser`
    * `toofab:curator:command:create-timeline`
    * `toofab:curator:command:create-widget`
    * `toofab:curator:command:delete-gallery`
    * `toofab:curator:command:delete-promotion`
    * `toofab:curator:command:delete-teaser`
    * `toofab:curator:command:delete-timeline`
    * `toofab:curator:command:delete-widget`
    * `toofab:curator:command:expire-gallery`
    * `toofab:curator:command:expire-promotion`
    * `toofab:curator:command:expire-teaser`
    * `toofab:curator:command:expire-timeline`
    * `toofab:curator:command:mark-gallery-as-draft`
    * `toofab:curator:command:mark-gallery-as-pending`
    * `toofab:curator:command:mark-promotion-as-draft`
    * `toofab:curator:command:mark-promotion-as-pending`
    * `toofab:curator:command:mark-teaser-as-draft`
    * `toofab:curator:command:mark-teaser-as-pending`
    * `toofab:curator:command:mark-timeline-as-draft`
    * `toofab:curator:command:mark-timeline-as-pending`
    * `toofab:curator:command:publish-gallery`
    * `toofab:curator:command:publish-promotion`
    * `toofab:curator:command:publish-teaser`
    * `toofab:curator:command:publish-timeline`
    * `toofab:curator:command:rename-gallery`
    * `toofab:curator:command:rename-timeline`
    * `toofab:curator:command:unpublish-gallery`
    * `toofab:curator:command:unpublish-promotion`
    * `toofab:curator:command:unpublish-teaser`
    * `toofab:curator:command:unpublish-timeline`
    * `toofab:curator:command:update-gallery`
    * `toofab:curator:command:update-promotion`
    * `toofab:curator:command:update-teaser`
    * `toofab:curator:command:update-timeline`
    * `toofab:curator:command:update-widget`
    * `toofab:curator:event:gallery-created`
    * `toofab:curator:event:gallery-deleted`
    * `toofab:curator:event:gallery-expired`
    * `toofab:curator:event:gallery-marked-as-draft`
    * `toofab:curator:event:gallery-marked-as-pending`
    * `toofab:curator:event:gallery-published`
    * `toofab:curator:event:gallery-renamed`
    * `toofab:curator:event:gallery-scheduled`
    * `toofab:curator:event:gallery-unpublished`
    * `toofab:curator:event:gallery-updated`
    * `toofab:curator:event:promotion-created`
    * `toofab:curator:event:promotion-deleted`
    * `toofab:curator:event:promotion-expired`
    * `toofab:curator:event:promotion-marked-as-draft`
    * `toofab:curator:event:promotion-marked-as-pending`
    * `toofab:curator:event:promotion-published`
    * `toofab:curator:event:promotion-scheduled`
    * `toofab:curator:event:promotion-unpublished`
    * `toofab:curator:event:promotion-updated`
    * `toofab:curator:event:teaser-created`
    * `toofab:curator:event:teaser-deleted`
    * `toofab:curator:event:teaser-expired`
    * `toofab:curator:event:teaser-marked-as-draft`
    * `toofab:curator:event:teaser-marked-as-pending`
    * `toofab:curator:event:teaser-published`
    * `toofab:curator:event:teaser-scheduled`
    * `toofab:curator:event:teaser-unpublished`
    * `toofab:curator:event:teaser-updated`
    * `toofab:curator:event:timeline-created`
    * `toofab:curator:event:timeline-deleted`
    * `toofab:curator:event:timeline-expired`
    * `toofab:curator:event:timeline-marked-as-draft`
    * `toofab:curator:event:timeline-marked-as-pending`
    * `toofab:curator:event:timeline-published`
    * `toofab:curator:event:timeline-renamed`
    * `toofab:curator:event:timeline-scheduled`
    * `toofab:curator:event:timeline-unpublished`
    * `toofab:curator:event:timeline-updated`
    * `toofab:curator:event:widget-created`
    * `toofab:curator:event:widget-deleted`
    * `toofab:curator:event:widget-updated`
    * `toofab:curator:node:article-teaser`
    * `toofab:curator:node:blogroll-widget`
    * `toofab:curator:node:carousel-widget`
    * `toofab:curator:node:category-teaser`
    * `toofab:curator:node:channel-teaser`
    * `toofab:curator:node:gallery`
    * `toofab:curator:node:gallery-teaser`
    * `toofab:curator:node:link-teaser`
    * `toofab:curator:node:page-teaser`
    * `toofab:curator:node:person-teaser`
    * `toofab:curator:node:poll-teaser`
    * `toofab:curator:node:promotion`
    * `toofab:curator:node:timeline`
    * `toofab:curator:node:timeline-teaser`
    * `toofab:curator:node:video-teaser`
    * `toofab:curator:node:youtube-video-teaser`
    * `toofab:curator:request:get-gallery-history-request`
    * `toofab:curator:request:get-gallery-history-response`
    * `toofab:curator:request:get-gallery-request`
    * `toofab:curator:request:get-gallery-response`
    * `toofab:curator:request:get-promotion-history-request`
    * `toofab:curator:request:get-promotion-history-response`
    * `toofab:curator:request:get-promotion-request`
    * `toofab:curator:request:get-promotion-response`
    * `toofab:curator:request:get-teaser-history-request`
    * `toofab:curator:request:get-teaser-history-response`
    * `toofab:curator:request:get-teaser-request`
    * `toofab:curator:request:get-teaser-response`
    * `toofab:curator:request:get-timeline-history-request`
    * `toofab:curator:request:get-timeline-history-response`
    * `toofab:curator:request:get-timeline-request`
    * `toofab:curator:request:get-timeline-response`
    * `toofab:curator:request:get-widget-history-request`
    * `toofab:curator:request:get-widget-history-response`
    * `toofab:curator:request:get-widget-request`
    * `toofab:curator:request:get-widget-response`
    * `toofab:curator:request:search-galleries-request`
    * `toofab:curator:request:search-galleries-response`
    * `toofab:curator:request:search-promotions-request`
    * `toofab:curator:request:search-promotions-response`
    * `toofab:curator:request:search-teasers-request`
    * `toofab:curator:request:search-teasers-response`
    * `toofab:curator:request:search-timelines-request`
    * `toofab:curator:request:search-timelines-response`
    * `toofab:curator:request:search-widgets-request`
    * `toofab:curator:request:search-widgets-response`
  * __toofab:dam__
    * `toofab:dam:command:create-asset`
    * `toofab:dam:command:delete-asset`
    * `toofab:dam:command:expire-asset`
    * `toofab:dam:command:link-assets`
    * `toofab:dam:command:patch-assets`
    * `toofab:dam:command:reorder-gallery-assets`
    * `toofab:dam:command:unlink-assets`
    * `toofab:dam:command:update-asset`
    * `toofab:dam:event:asset-created`
    * `toofab:dam:event:asset-deleted`
    * `toofab:dam:event:asset-expired`
    * `toofab:dam:event:asset-linked`
    * `toofab:dam:event:asset-patched`
    * `toofab:dam:event:asset-unlinked`
    * `toofab:dam:event:asset-updated`
    * `toofab:dam:event:gallery-asset-reordered`
    * `toofab:dam:node:archive-asset`
    * `toofab:dam:node:audio-asset`
    * `toofab:dam:node:code-asset`
    * `toofab:dam:node:document-asset`
    * `toofab:dam:node:image-asset`
    * `toofab:dam:node:unknown-asset`
    * `toofab:dam:node:video-asset`
    * `toofab:dam:request:get-asset-history-request`
    * `toofab:dam:request:get-asset-history-response`
    * `toofab:dam:request:get-asset-request`
    * `toofab:dam:request:get-asset-response`
    * `toofab:dam:request:get-upload-urls-request`
    * `toofab:dam:request:get-upload-urls-response`
    * `toofab:dam:request:search-assets-request`
    * `toofab:dam:request:search-assets-response`
  * __toofab:iam__
    * `toofab:iam:command:create-app`
    * `toofab:iam:command:create-role`
    * `toofab:iam:command:create-user`
    * `toofab:iam:command:delete-app`
    * `toofab:iam:command:delete-role`
    * `toofab:iam:command:delete-user`
    * `toofab:iam:command:grant-roles-to-app`
    * `toofab:iam:command:grant-roles-to-user`
    * `toofab:iam:command:revoke-roles-from-app`
    * `toofab:iam:command:revoke-roles-from-user`
    * `toofab:iam:command:update-app`
    * `toofab:iam:command:update-role`
    * `toofab:iam:command:update-user`
    * `toofab:iam:event:app-created`
    * `toofab:iam:event:app-deleted`
    * `toofab:iam:event:app-roles-granted`
    * `toofab:iam:event:app-roles-revoked`
    * `toofab:iam:event:app-updated`
    * `toofab:iam:event:role-created`
    * `toofab:iam:event:role-deleted`
    * `toofab:iam:event:role-updated`
    * `toofab:iam:event:user-created`
    * `toofab:iam:event:user-deleted`
    * `toofab:iam:event:user-roles-granted`
    * `toofab:iam:event:user-roles-revoked`
    * `toofab:iam:event:user-updated`
    * `toofab:iam:node:alexa-app`
    * `toofab:iam:node:android-app`
    * `toofab:iam:node:apple-news-app`
    * `toofab:iam:node:browser-app`
    * `toofab:iam:node:email-app`
    * `toofab:iam:node:ios-app`
    * `toofab:iam:node:role`
    * `toofab:iam:node:slack-app`
    * `toofab:iam:node:sms-app`
    * `toofab:iam:node:user`
    * `toofab:iam:request:get-all-apps-request`
    * `toofab:iam:request:get-all-apps-response`
    * `toofab:iam:request:get-app-history-request`
    * `toofab:iam:request:get-app-history-response`
    * `toofab:iam:request:get-app-request`
    * `toofab:iam:request:get-app-response`
    * `toofab:iam:request:get-role-history-request`
    * `toofab:iam:request:get-role-history-response`
    * `toofab:iam:request:get-role-request`
    * `toofab:iam:request:get-role-response`
    * `toofab:iam:request:get-user-history-request`
    * `toofab:iam:request:get-user-history-response`
    * `toofab:iam:request:get-user-request`
    * `toofab:iam:request:get-user-response`
    * `toofab:iam:request:list-all-roles-request`
    * `toofab:iam:request:list-all-roles-response`
    * `toofab:iam:request:search-users-request`
    * `toofab:iam:request:search-users-response`
  * __toofab:news__
    * `toofab:news:command:create-article`
    * `toofab:news:command:delete-article`
    * `toofab:news:command:expire-article`
    * `toofab:news:command:lock-article`
    * `toofab:news:command:mark-article-as-draft`
    * `toofab:news:command:mark-article-as-pending`
    * `toofab:news:command:publish-article`
    * `toofab:news:command:rename-article`
    * `toofab:news:command:unlock-article`
    * `toofab:news:command:unpublish-article`
    * `toofab:news:command:update-article`
    * `toofab:news:event:article-created`
    * `toofab:news:event:article-deleted`
    * `toofab:news:event:article-expired`
    * `toofab:news:event:article-locked`
    * `toofab:news:event:article-marked-as-draft`
    * `toofab:news:event:article-marked-as-pending`
    * `toofab:news:event:article-published`
    * `toofab:news:event:article-renamed`
    * `toofab:news:event:article-scheduled`
    * `toofab:news:event:article-unpublished`
    * `toofab:news:event:article-unlocked`
    * `toofab:news:event:article-updated`
    * `toofab:news:node:article`
    * `toofab:news:request:get-article-history-request`
    * `toofab:news:request:get-article-history-response`
    * `toofab:news:request:get-article-request`
    * `toofab:news:request:get-article-response`
    * `toofab:news:request:search-articles-request`
    * `toofab:news:request:search-articles-response`
  * __toofab:notify__
    * `toofab:notify:command:create-notification`
    * `toofab:notify:command:delete-notification`
    * `toofab:notify:command:update-notification`
    * `toofab:notify:event:notification-created`
    * `toofab:notify:event:notification-deleted`
    * `toofab:notify:event:notification-failed`
    * `toofab:notify:event:notification-sent`
    * `toofab:notify:event:notification-updated`
    * `toofab:notify:node:alexa-notification`
    * `toofab:notify:node:android-notification`
    * `toofab:notify:node:apple-news-notification`
    * `toofab:notify:node:browser-notification`
    * `toofab:notify:node:email-notification`
    * `toofab:notify:node:ios-notification`
    * `toofab:notify:node:slack-notification`
    * `toofab:notify:node:sms-notification`
    * `toofab:notify:request:get-notification-history-request`
    * `toofab:notify:request:get-notification-history-response`
    * `toofab:notify:request:get-notification-request`
    * `toofab:notify:request:get-notification-response`
    * `toofab:notify:request:search-notifications-request`
    * `toofab:notify:request:search-notifications-response`
  * __toofab:ovp__
    * `toofab:ovp:command:create-video`
    * `toofab:ovp:command:delete-video`
    * `toofab:ovp:command:expire-video`
    * `toofab:ovp:command:mark-video-as-draft`
    * `toofab:ovp:command:mark-video-as-pending`
    * `toofab:ovp:command:publish-video`
    * `toofab:ovp:command:rename-video`
    * `toofab:ovp:command:unpublish-video`
    * `toofab:ovp:command:update-video`
    * `toofab:ovp:event:video-created`
    * `toofab:ovp:event:video-deleted`
    * `toofab:ovp:event:video-expired`
    * `toofab:ovp:event:video-marked-as-draft`
    * `toofab:ovp:event:video-marked-as-pending`
    * `toofab:ovp:event:video-published`
    * `toofab:ovp:event:video-renamed`
    * `toofab:ovp:event:video-scheduled`
    * `toofab:ovp:event:video-unpublished`
    * `toofab:ovp:event:video-updated`
    * `toofab:ovp:node:video`
    * `toofab:ovp:request:get-video-history-request`
    * `toofab:ovp:request:get-video-history-response`
    * `toofab:ovp:request:get-video-request`
    * `toofab:ovp:request:get-video-response`
    * `toofab:ovp:request:search-videos-request`
    * `toofab:ovp:request:search-videos-response`
  * __toofab:people__
    * `toofab:people:command:create-person`
    * `toofab:people:command:delete-person`
    * `toofab:people:command:rename-person`
    * `toofab:people:command:update-person`
    * `toofab:people:event:person-created`
    * `toofab:people:event:person-deleted`
    * `toofab:people:event:person-renamed`
    * `toofab:people:event:person-updated`
    * `toofab:people:node:person`
    * `toofab:people:request:get-person-history-request`
    * `toofab:people:request:get-person-history-response`
    * `toofab:people:request:get-person-request`
    * `toofab:people:request:get-person-response`
    * `toofab:people:request:search-people-request`
    * `toofab:people:request:search-people-response`
  * __toofab:sys__
    * `toofab:sys:command:create-picklist`
    * `toofab:sys:command:create-redirect`
    * `toofab:sys:command:delete-picklist`
    * `toofab:sys:command:delete-redirect`
    * `toofab:sys:command:update-picklist`
    * `toofab:sys:command:update-redirect`
    * `toofab:sys:event:picklist-created`
    * `toofab:sys:event:picklist-deleted`
    * `toofab:sys:event:picklist-updated`
    * `toofab:sys:event:redirect-created`
    * `toofab:sys:event:redirect-deleted`
    * `toofab:sys:event:redirect-updated`
    * `toofab:sys:node:picklist`
    * `toofab:sys:node:redirect`
    * `toofab:sys:request:get-picklist-history-request`
    * `toofab:sys:request:get-picklist-history-response`
    * `toofab:sys:request:get-picklist-request`
    * `toofab:sys:request:get-picklist-response`
    * `toofab:sys:request:get-redirect-history-request`
    * `toofab:sys:request:get-redirect-history-response`
    * `toofab:sys:request:get-redirect-request`
    * `toofab:sys:request:get-redirect-response`
    * `toofab:sys:request:list-all-picklists-request`
    * `toofab:sys:request:list-all-picklists-response`
    * `toofab:sys:request:search-redirects-request`
    * `toofab:sys:request:search-redirects-response`
  * __toofab:taxonomy__
    * `toofab:taxonomy:command:create-category`
    * `toofab:taxonomy:command:create-channel`
    * `toofab:taxonomy:command:delete-category`
    * `toofab:taxonomy:command:delete-channel`
    * `toofab:taxonomy:command:rename-category`
    * `toofab:taxonomy:command:rename-channel`
    * `toofab:taxonomy:command:update-category`
    * `toofab:taxonomy:command:update-channel`
    * `toofab:taxonomy:event:category-created`
    * `toofab:taxonomy:event:category-deleted`
    * `toofab:taxonomy:event:category-renamed`
    * `toofab:taxonomy:event:category-updated`
    * `toofab:taxonomy:event:channel-created`
    * `toofab:taxonomy:event:channel-deleted`
    * `toofab:taxonomy:event:channel-renamed`
    * `toofab:taxonomy:event:channel-updated`
    * `toofab:taxonomy:node:category`
    * `toofab:taxonomy:node:channel`
    * `toofab:taxonomy:request:get-all-channels-request`
    * `toofab:taxonomy:request:get-all-channels-response`
    * `toofab:taxonomy:request:get-category-history-request`
    * `toofab:taxonomy:request:get-category-history-response`
    * `toofab:taxonomy:request:get-category-request`
    * `toofab:taxonomy:request:get-category-response`
    * `toofab:taxonomy:request:get-channel-history-request`
    * `toofab:taxonomy:request:get-channel-history-response`
    * `toofab:taxonomy:request:get-channel-request`
    * `toofab:taxonomy:request:get-channel-response`
    * `toofab:taxonomy:request:search-categories-request`
    * `toofab:taxonomy:request:search-categories-response`
    * `toofab:taxonomy:request:suggest-hashtags-request`
    * `toofab:taxonomy:request:suggest-hashtags-response`
