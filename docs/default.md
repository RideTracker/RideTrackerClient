# Class: default

## Table of contents

### Constructors

- [constructor](../wiki/default#constructor)

### Properties

- [host](../wiki/default#host)
- [token](../wiki/default#token)

### Methods

- [request](../wiki/default#request)

## Constructors

### constructor

• **new default**(`host`, `token?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `token?` | `string` |

#### Defined in

[index.ts:7](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/index.ts#L7)

## Properties

### host

• **host**: `string`

#### Defined in

[index.ts:4](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/index.ts#L4)

___

### token

• `Optional` **token**: `string`

#### Defined in

[index.ts:5](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/index.ts#L5)

## Methods

### request

▸ **request**(`method`, `url`, `initialHeaders?`, `body?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`Method`](../wiki/Exports#method) |
| `url` | `URL` |
| `initialHeaders?` | `Record`<`string`, `string`\> |
| `body?` | `BodyInit` |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:12](https://github.com/RideTracker/RideTrackerClient/blob/a501d96/src/index.ts#L12)
