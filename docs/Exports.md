# @ridetracker/ridetrackerclient

## Table of contents

### Classes

- [default](../wiki/default)

### Type Aliases

- [AuthRegisterResponse](../wiki/Exports#authregisterresponse)
- [AuthenticateUserResponse](../wiki/Exports#authenticateuserresponse)
- [CreateActivityCommentsResponse](../wiki/Exports#createactivitycommentsresponse)
- [CreateActivityResponse](../wiki/Exports#createactivityresponse)
- [CreateBikeResponse](../wiki/Exports#createbikeresponse)
- [DefaultResponse](../wiki/Exports#defaultresponse)
- [DeleteActivityCommentResponse](../wiki/Exports#deleteactivitycommentresponse)
- [GetActivityCommentsResponse](../wiki/Exports#getactivitycommentsresponse)
- [GetActivityCommentsSummaryResponse](../wiki/Exports#getactivitycommentssummaryresponse)
- [GetActivityResponse](../wiki/Exports#getactivityresponse)
- [GetActivitySummaryResponse](../wiki/Exports#getactivitysummaryresponse)
- [GetBikeResponse](../wiki/Exports#getbikeresponse)
- [GetBikesResponse](../wiki/Exports#getbikesresponse)
- [GetFeedResponse](../wiki/Exports#getfeedresponse)
- [GetProfileActivitiesResponse](../wiki/Exports#getprofileactivitiesresponse)
- [GetProfileBikesResponse](../wiki/Exports#getprofilebikesresponse)
- [GetProfileResponse](../wiki/Exports#getprofileresponse)
- [GetRandomTokenResponse](../wiki/Exports#getrandomtokenresponse)
- [GetVerificationCodeResponse](../wiki/Exports#getverificationcoderesponse)
- [LoginResponse](../wiki/Exports#loginresponse)
- [LoginVerificationResponse](../wiki/Exports#loginverificationresponse)
- [Method](../wiki/Exports#method)
- [PingResponse](../wiki/Exports#pingresponse)
- [UpdateActivityCommentResponse](../wiki/Exports#updateactivitycommentresponse)
- [UploadUserAvatarResponse](../wiki/Exports#uploaduseravatarresponse)

### Functions

- [authenticateUser](../wiki/Exports#authenticateuser)
- [createActivity](../wiki/Exports#createactivity)
- [createActivityComment](../wiki/Exports#createactivitycomment)
- [createBike](../wiki/Exports#createbike)
- [deleteActivityComment](../wiki/Exports#deleteactivitycomment)
- [getActivityById](../wiki/Exports#getactivitybyid)
- [getActivityComments](../wiki/Exports#getactivitycomments)
- [getActivityCommentsSummary](../wiki/Exports#getactivitycommentssummary)
- [getActivitySummary](../wiki/Exports#getactivitysummary)
- [getBike](../wiki/Exports#getbike)
- [getBikes](../wiki/Exports#getbikes)
- [getFeed](../wiki/Exports#getfeed)
- [getProfileActivities](../wiki/Exports#getprofileactivities)
- [getProfileBikes](../wiki/Exports#getprofilebikes)
- [getProfileById](../wiki/Exports#getprofilebyid)
- [getRandomToken](../wiki/Exports#getrandomtoken)
- [getVerificationCode](../wiki/Exports#getverificationcode)
- [loginUser](../wiki/Exports#loginuser)
- [ping](../wiki/Exports#ping)
- [registerUser](../wiki/Exports#registeruser)
- [updateActivityComment](../wiki/Exports#updateactivitycomment)
- [uploadUserAvatar](../wiki/Exports#uploaduseravatar)
- [verifyLogin](../wiki/Exports#verifylogin)

## Type Aliases

### AuthRegisterResponse

Ƭ **AuthRegisterResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `verification`: `string`  }

#### Defined in

[controllers/auth/registerUser.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/auth/registerUser.ts#L4)

___

### AuthenticateUserResponse

Ƭ **AuthenticateUserResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `key`: `string` ; `user`: { `avatar`: `string` ; `id`: `string` ; `name`: `string`  }  }

#### Defined in

[controllers/auth/authenticateUser.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/auth/authenticateUser.ts#L4)

___

### CreateActivityCommentsResponse

Ƭ **CreateActivityCommentsResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `comment`: { `activity`: `string` ; `id`: `string`  }  }

#### Defined in

[controllers/activities/comments/createActivityComment.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/comments/createActivityComment.ts#L4)

___

### CreateActivityResponse

Ƭ **CreateActivityResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `activity`: { `id`: `string`  }  }

#### Defined in

[controllers/activities/createActivity.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/createActivity.ts#L4)

___

### CreateBikeResponse

Ƭ **CreateBikeResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `bike`: { `id`: `string` ; `name`: `string`  }  }

#### Defined in

[controllers/bikes/createBike.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/bikes/createBike.ts#L4)

___

### DefaultResponse

Ƭ **DefaultResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `success` | `boolean` |

#### Defined in

[models/DefaultResponse.ts:1](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/models/DefaultResponse.ts#L1)

___

### DeleteActivityCommentResponse

Ƭ **DeleteActivityCommentResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse)

#### Defined in

[controllers/activities/comments/deleteActivityComment.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/comments/deleteActivityComment.ts#L4)

___

### GetActivityCommentsResponse

Ƭ **GetActivityCommentsResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `comments`: { `id`: `string` ; `message`: `string` ; `parent?`: `string` ; `timestamp`: `number` ; `user?`: { `avatar`: `string` ; `id`: `string` ; `name`: `string`  }  }[]  }

#### Defined in

[controllers/activities/comments/getActivityComments.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/comments/getActivityComments.ts#L4)

___

### GetActivityCommentsSummaryResponse

Ƭ **GetActivityCommentsSummaryResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `comments`: { `comments_count`: `number` ; `id`: `string` ; `message`: `string` ; `parent`: `string` ; `timestamp`: `number` ; `user?`: { `avatar`: `string` ; `id`: `string` ; `name`: `string`  }  }[] ; `commentsCount`: `number`  }

#### Defined in

[controllers/activities/comments/summaries/getActivityCommentsSummary.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/comments/summaries/getActivityCommentsSummary.ts#L4)

___

### GetActivityResponse

Ƭ **GetActivityResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `activity`: { `bike?`: { `id`: `string` ; `image`: `string` ; `model`: `string` ; `name`: `string` ; `summary?`: { `distance`: `number` ; `elevation`: `number` ; `rides`: `number`  }  } ; `comment?`: { `message`: `string` ; `timestamp`: `number` ; `user?`: { `avatar`: `string` ; `id`: `string` ; `name`: `string`  }  } ; `comments`: `number` ; `id`: `string` ; `polylines?`: `string`[] ; `summary?`: { `averageSpeed`: `number` ; `averageSpeedPersonalBest?`: `boolean` ; `distance`: `number` ; `distancePersonalBest?`: `boolean` ; `elevation`: `number` ; `elevationPersonalBest?`: `boolean` ; `finishArea`: `string` ; `maxSpeed`: `number` ; `maxSpeedPersonalBest?`: `boolean` ; `startArea`: `string`  } ; `timestamp`: `number` ; `user`: { `avatar`: `string` ; `id`: `string` ; `name`: `string`  }  } ; `user`: { `likes`: `boolean`  }  }

#### Defined in

[controllers/activities/getActivityById.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/getActivityById.ts#L4)

___

### GetActivitySummaryResponse

Ƭ **GetActivitySummaryResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `activitySummary`: { `averageSpeed`: `number` ; `averageSpeedPersonalBest?`: `boolean` ; `distance`: `number` ; `distancePersonalBest?`: `boolean` ; `elevation`: `number` ; `elevationPersonalBest?`: `boolean` ; `finishArea`: `string` ; `maxSpeed`: `number` ; `maxSpeedPersonalBest?`: `boolean` ; `startArea`: `string`  }  }

#### Defined in

[controllers/activities/summaries/getActivitySummary.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/summaries/getActivitySummary.ts#L4)

___

### GetBikeResponse

Ƭ **GetBikeResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `bike`: { `id`: `string` ; `image`: `string` ; `model`: `string` ; `name`: `string` ; `summary?`: { `distance`: `number` ; `elevation`: `number` ; `rides`: `number`  }  }  }

#### Defined in

[controllers/bikes/getBike.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/bikes/getBike.ts#L4)

___

### GetBikesResponse

Ƭ **GetBikesResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `bikes`: { `id`: `string` ; `image`: `string` ; `model`: `string` ; `name`: `string` ; `summary?`: { `distance`: `number` ; `elevation`: `number` ; `rides`: `number`  }  }[]  }

#### Defined in

[controllers/bikes/getBikes.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/bikes/getBikes.ts#L4)

___

### GetFeedResponse

Ƭ **GetFeedResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `activities`: { `id`: `string` ; `timestamp`: `number`  }[]  }

#### Defined in

[controllers/feed/getFeed.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/feed/getFeed.ts#L4)

___

### GetProfileActivitiesResponse

Ƭ **GetProfileActivitiesResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `activities`: `string`[] ; `offset`: `number`  }

#### Defined in

[controllers/profiles/activities/getProfileActivities.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/profiles/activities/getProfileActivities.ts#L4)

___

### GetProfileBikesResponse

Ƭ **GetProfileBikesResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `bikes`: `string`[] ; `offset`: `number`  }

#### Defined in

[controllers/profiles/bikes/getProfileBikes.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/profiles/bikes/getProfileBikes.ts#L4)

___

### GetProfileResponse

Ƭ **GetProfileResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `profile`: { `stats`: { `activities`: `number` ; `followers`: `number`  } ; `user`: { `avatar`: `string` ; `id`: `string` ; `name`: `string`  }  }  }

#### Defined in

[controllers/profiles/getProfileById.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/profiles/getProfileById.ts#L4)

___

### GetRandomTokenResponse

Ƭ **GetRandomTokenResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `key`: `string`  }

#### Defined in

[controllers/auth/getRandomToken.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/auth/getRandomToken.ts#L4)

___

### GetVerificationCodeResponse

Ƭ **GetVerificationCodeResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `code`: `string`  }

#### Defined in

[controllers/auth/verification/getVerificationCode.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/auth/verification/getVerificationCode.ts#L4)

___

### LoginResponse

Ƭ **LoginResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `verification`: `string`  }

#### Defined in

[controllers/auth/loginUser.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/auth/loginUser.ts#L4)

___

### LoginVerificationResponse

Ƭ **LoginVerificationResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `key`: `string`  }

#### Defined in

[controllers/auth/verification/verifyLogin.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/auth/verification/verifyLogin.ts#L4)

___

### Method

Ƭ **Method**: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"``

#### Defined in

[models/Method.ts:1](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/models/Method.ts#L1)

___

### PingResponse

Ƭ **PingResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `ping`: `string`  }

#### Defined in

[controllers/ping.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/ping.ts#L4)

___

### UpdateActivityCommentResponse

Ƭ **UpdateActivityCommentResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse)

#### Defined in

[controllers/activities/comments/updateActivityComment.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/comments/updateActivityComment.ts#L4)

___

### UploadUserAvatarResponse

Ƭ **UploadUserAvatarResponse**: [`DefaultResponse`](../wiki/Exports#defaultresponse) & { `userAvatar`: { `id`: `string`  }  }

#### Defined in

[controllers/user/avatars/uploadUserAvatar.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/user/avatars/uploadUserAvatar.ts#L4)

## Functions

### authenticateUser

▸ **authenticateUser**(`client`): `Promise`<[`AuthenticateUserResponse`](../wiki/Exports#authenticateuserresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |

#### Returns

`Promise`<[`AuthenticateUserResponse`](../wiki/Exports#authenticateuserresponse)\>

#### Defined in

[controllers/auth/authenticateUser.ts:13](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/auth/authenticateUser.ts#L13)

___

### createActivity

▸ **createActivity**(`client`, `sessions`, `title?`, `description?`, `bikeId?`): `Promise`<[`CreateActivityResponse`](../wiki/Exports#createactivityresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `sessions` | `any` |
| `title?` | `string` |
| `description?` | `string` |
| `bikeId?` | `string` |

#### Returns

`Promise`<[`CreateActivityResponse`](../wiki/Exports#createactivityresponse)\>

#### Defined in

[controllers/activities/createActivity.ts:10](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/createActivity.ts#L10)

___

### createActivityComment

▸ **createActivityComment**(`client`, `activityId`, `message`, `parentId?`): `Promise`<[`CreateActivityCommentsResponse`](../wiki/Exports#createactivitycommentsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `activityId` | `string` |
| `message` | `string` |
| `parentId?` | `string` |

#### Returns

`Promise`<[`CreateActivityCommentsResponse`](../wiki/Exports#createactivitycommentsresponse)\>

#### Defined in

[controllers/activities/comments/createActivityComment.ts:11](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/comments/createActivityComment.ts#L11)

___

### createBike

▸ **createBike**(`client`, `name`): `Promise`<[`CreateBikeResponse`](../wiki/Exports#createbikeresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `name` | `string` |

#### Returns

`Promise`<[`CreateBikeResponse`](../wiki/Exports#createbikeresponse)\>

#### Defined in

[controllers/bikes/createBike.ts:11](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/bikes/createBike.ts#L11)

___

### deleteActivityComment

▸ **deleteActivityComment**(`client`, `activityId`, `commentId`): `Promise`<[`DeleteActivityCommentResponse`](../wiki/Exports#deleteactivitycommentresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `activityId` | `string` |
| `commentId` | `string` |

#### Returns

`Promise`<[`DeleteActivityCommentResponse`](../wiki/Exports#deleteactivitycommentresponse)\>

#### Defined in

[controllers/activities/comments/deleteActivityComment.ts:6](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/comments/deleteActivityComment.ts#L6)

___

### getActivityById

▸ **getActivityById**(`client`, `activityId`): `Promise`<[`GetActivityResponse`](../wiki/Exports#getactivityresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `activityId` | `string` |

#### Returns

`Promise`<[`GetActivityResponse`](../wiki/Exports#getactivityresponse)\>

#### Defined in

[controllers/activities/getActivityById.ts:67](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/getActivityById.ts#L67)

___

### getActivityComments

▸ **getActivityComments**(`client`, `activityId`): `Promise`<[`GetActivityCommentsResponse`](../wiki/Exports#getactivitycommentsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `activityId` | `string` |

#### Returns

`Promise`<[`GetActivityCommentsResponse`](../wiki/Exports#getactivitycommentsresponse)\>

#### Defined in

[controllers/activities/comments/getActivityComments.ts:19](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/comments/getActivityComments.ts#L19)

___

### getActivityCommentsSummary

▸ **getActivityCommentsSummary**(`client`, `activityId`): `Promise`<[`GetActivityCommentsSummaryResponse`](../wiki/Exports#getactivitycommentssummaryresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `activityId` | `string` |

#### Returns

`Promise`<[`GetActivityCommentsSummaryResponse`](../wiki/Exports#getactivitycommentssummaryresponse)\>

#### Defined in

[controllers/activities/comments/summaries/getActivityCommentsSummary.ts:22](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/comments/summaries/getActivityCommentsSummary.ts#L22)

___

### getActivitySummary

▸ **getActivitySummary**(`client`, `activityId`): `Promise`<[`GetActivitySummaryResponse`](../wiki/Exports#getactivitysummaryresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `activityId` | `string` |

#### Returns

`Promise`<[`GetActivitySummaryResponse`](../wiki/Exports#getactivitysummaryresponse)\>

#### Defined in

[controllers/activities/summaries/getActivitySummary.ts:23](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/summaries/getActivitySummary.ts#L23)

___

### getBike

▸ **getBike**(`client`, `bikeId`): `Promise`<[`GetBikeResponse`](../wiki/Exports#getbikeresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `bikeId` | `string` |

#### Returns

`Promise`<[`GetBikeResponse`](../wiki/Exports#getbikeresponse)\>

#### Defined in

[controllers/bikes/getBike.ts:19](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/bikes/getBike.ts#L19)

___

### getBikes

▸ **getBikes**(`client`): `Promise`<[`GetBikesResponse`](../wiki/Exports#getbikesresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |

#### Returns

`Promise`<[`GetBikesResponse`](../wiki/Exports#getbikesresponse)\>

#### Defined in

[controllers/bikes/getBikes.ts:19](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/bikes/getBikes.ts#L19)

___

### getFeed

▸ **getFeed**(`client`, `offset?`, `search?`, `order?`, `timeline?`): `Promise`<[`GetFeedResponse`](../wiki/Exports#getfeedresponse)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `client` | [`default`](../wiki/default) | `undefined` |
| `offset` | `number` | `0` |
| `search?` | `string` | `undefined` |
| `order?` | `string` | `undefined` |
| `timeline?` | `string` | `undefined` |

#### Returns

`Promise`<[`GetFeedResponse`](../wiki/Exports#getfeedresponse)\>

#### Defined in

[controllers/feed/getFeed.ts:11](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/feed/getFeed.ts#L11)

___

### getProfileActivities

▸ **getProfileActivities**(`client`, `userId`, `offset`): `Promise`<[`GetProfileActivitiesResponse`](../wiki/Exports#getprofileactivitiesresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `userId` | `string` |
| `offset` | `number` |

#### Returns

`Promise`<[`GetProfileActivitiesResponse`](../wiki/Exports#getprofileactivitiesresponse)\>

#### Defined in

[controllers/profiles/activities/getProfileActivities.ts:9](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/profiles/activities/getProfileActivities.ts#L9)

___

### getProfileBikes

▸ **getProfileBikes**(`client`, `userId`, `offset`): `Promise`<[`GetProfileBikesResponse`](../wiki/Exports#getprofilebikesresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `userId` | `string` |
| `offset` | `number` |

#### Returns

`Promise`<[`GetProfileBikesResponse`](../wiki/Exports#getprofilebikesresponse)\>

#### Defined in

[controllers/profiles/bikes/getProfileBikes.ts:9](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/profiles/bikes/getProfileBikes.ts#L9)

___

### getProfileById

▸ **getProfileById**(`client`, `userId`): `Promise`<[`GetProfileResponse`](../wiki/Exports#getprofileresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `userId` | `string` |

#### Returns

`Promise`<[`GetProfileResponse`](../wiki/Exports#getprofileresponse)\>

#### Defined in

[controllers/profiles/getProfileById.ts:19](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/profiles/getProfileById.ts#L19)

___

### getRandomToken

▸ **getRandomToken**(`client`): `Promise`<[`GetRandomTokenResponse`](../wiki/Exports#getrandomtokenresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |

#### Returns

`Promise`<[`GetRandomTokenResponse`](../wiki/Exports#getrandomtokenresponse)\>

#### Defined in

[controllers/auth/getRandomToken.ts:8](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/auth/getRandomToken.ts#L8)

___

### getVerificationCode

▸ **getVerificationCode**(`client`, `verificationId`): `Promise`<[`GetVerificationCodeResponse`](../wiki/Exports#getverificationcoderesponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `verificationId` | `string` |

#### Returns

`Promise`<[`GetVerificationCodeResponse`](../wiki/Exports#getverificationcoderesponse)\>

#### Defined in

[controllers/auth/verification/getVerificationCode.ts:8](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/auth/verification/getVerificationCode.ts#L8)

___

### loginUser

▸ **loginUser**(`client`, `email`, `password`): `Promise`<[`LoginResponse`](../wiki/Exports#loginresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `email` | `string` |
| `password` | `string` |

#### Returns

`Promise`<[`LoginResponse`](../wiki/Exports#loginresponse)\>

#### Defined in

[controllers/auth/loginUser.ts:8](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/auth/loginUser.ts#L8)

___

### ping

▸ **ping**(`client`): `Promise`<[`PingResponse`](../wiki/Exports#pingresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |

#### Returns

`Promise`<[`PingResponse`](../wiki/Exports#pingresponse)\>

#### Defined in

[controllers/ping.ts:8](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/ping.ts#L8)

___

### registerUser

▸ **registerUser**(`client`, `firstname`, `lastname`, `email`, `password`): `Promise`<[`AuthRegisterResponse`](../wiki/Exports#authregisterresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `firstname` | `string` |
| `lastname` | `string` |
| `email` | `string` |
| `password` | `string` |

#### Returns

`Promise`<[`AuthRegisterResponse`](../wiki/Exports#authregisterresponse)\>

#### Defined in

[controllers/auth/registerUser.ts:8](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/auth/registerUser.ts#L8)

___

### updateActivityComment

▸ **updateActivityComment**(`client`, `activityId`, `commentId`, `message`): `Promise`<[`UpdateActivityCommentResponse`](../wiki/Exports#updateactivitycommentresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `activityId` | `string` |
| `commentId` | `string` |
| `message` | `string` |

#### Returns

`Promise`<[`UpdateActivityCommentResponse`](../wiki/Exports#updateactivitycommentresponse)\>

#### Defined in

[controllers/activities/comments/updateActivityComment.ts:6](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/activities/comments/updateActivityComment.ts#L6)

___

### uploadUserAvatar

▸ **uploadUserAvatar**(`client`, `image`, `combination`): `Promise`<[`UploadUserAvatarResponse`](../wiki/Exports#uploaduseravatarresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `image` | `string` |
| `combination` | `string` |

#### Returns

`Promise`<[`UploadUserAvatarResponse`](../wiki/Exports#uploaduseravatarresponse)\>

#### Defined in

[controllers/user/avatars/uploadUserAvatar.ts:10](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/user/avatars/uploadUserAvatar.ts#L10)

___

### verifyLogin

▸ **verifyLogin**(`client`, `verificationId`, `verificationCode`): `Promise`<[`LoginVerificationResponse`](../wiki/Exports#loginverificationresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`default`](../wiki/default) |
| `verificationId` | `string` |
| `verificationCode` | `string` |

#### Returns

`Promise`<[`LoginVerificationResponse`](../wiki/Exports#loginverificationresponse)\>

#### Defined in

[controllers/auth/verification/verifyLogin.ts:8](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/controllers/auth/verification/verifyLogin.ts#L8)
