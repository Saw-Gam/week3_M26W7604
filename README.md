> **Student: M26W7604** · your domain: **Tiny Town Toys** (`toy-store`)

# Tiny Town Toys

A toy shop with puzzles, building sets, plush toys and more.

## Your collections

| Collection | What it is | API path |
|---|---|---|
| `toys` (main) | 30 toys you can show and filter | `https://kcgi.impasta.dev/api/v1/toys` |
| `toyReservations` (secondary) | The form target: people send a new toy reservation | `https://kcgi.impasta.dev/api/v1/toyReservations` |

One toy: `https://kcgi.impasta.dev/api/v1/toys/1`  
Toy reservations for one toy: `https://kcgi.impasta.dev/api/v1/toyReservations?toyId=1`

You use the API from week 10. Before that, you use `data.json`.

## Role table: `toys`

The assignments use **role words**. This table shows your real field name for each role.

| Role word | Your field | Type | Example value from item 1 |
|---|---|---|---|
| **id** | `id` | number | `1` |
| **name field** | `toyName` | string | `"Happy Flying Disc"` |
| **category field** | `toyType` | string (one of 5 values) | `"Outdoor"` |
| **amount field** | `recommendedAge` | number (years) | `8` |
| **rating field** | `kidRating` | number (1.0 to 5.0) | `3.7` |
| **flag field** | `giftWrap` | boolean | `false` |
| **date field** | `arrivedInShop` | string "YYYY-MM-DD" | `"2026-06-03"` |
| **list field** | `learning` | array of 1 to 4 strings | `["creativity"]` |
| **details object** | `box` | object | `{"boxColor": "Blue", "weightGrams": 305}` |
| details: text | `box.boxColor` | string | `"Blue"` |
| details: number | `box.weightGrams` | number | `305` |
| **image field** | `toyPhoto` | string (URL) | `"https://picsum.photos/seed/toy-store-1/400/300"` |
| **description field** | `aboutToy` | string | `"Happy Flying Disc weighs about 305 grams, so it is easy to carry."` |

- **Recommended age** is in **years**. It is a whole number from 1 to 12.

## Category values (`toyType`)

- `Puzzle`
- `Building Set`
- `Plush`
- `Outdoor`
- `Science Kit`

## Flag meaning (`giftWrap`)

- `true` means **Gift wrap OK**
- `false` means **No gift wrap**

## Form fields: `toyReservations`

Your form sends a new toy reservation. The server checks the same rules.

| Role word | Your field | Label | Rule | Example |
|---|---|---|---|---|
| **id** | `id` | - | created by the server | `1` |
| **reference field** | `toyId` | - | required, the id of a toy that exists (filled automatically) | `12` |
| **person field** | `parentName` | Your name | required, 2 to 40 characters | `"Jun Park"` |
| **email field** | `email` | Email | required, contains `@` and a `.` after it | `"jun.park@example.com"` |
| **count field** | `quantity` | Quantity | required, whole number from 1 to 4 | `1` |
| **when field** | `pickupOn` | Pickup date | required, "YYYY-MM-DD", today or later | `"2027-02-12"` |
| **note field** | `giftNote` | Gift note | optional, max 200 characters | `"I will come after 5 pm."` |

## How to use in weeks 2-9

1. Put `data.json` in your `src/` folder.
2. In your code, write: `import items from './data.json'`
3. `items` is an array with 30 toys. `items[0]` is the first one.
4. From week 6, also copy `types.d.ts` into `src/`. It is a read-only map of your data. Do not edit it.

From week 10, you load the same data from the API with `fetch`.
