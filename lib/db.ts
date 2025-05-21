import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

//1. 테스트 코드
// db.user.create({
//   data: {
//     username: "test"
//   },
// });

//2. 테스트 코드
// async function test() {
//     const user = await db.user.create({
//         data: {
//           username: "test"
//         },
//       });

//     console.log(user);
// }

// test();

//3. 테스트 코드
// async function test() {
//     const token = await db.sMSToken.create({
//         data: {
//             token: "1234567890",
//             user: {
//                 connect: {
//                     id: 1
//                 }
//             }
//         },
//     });
//     console.log(token);
// }
// test(); 

//4. 테스트 코드 
async function test() {
    const token = await db.sMSToken.findUnique({
        where: {
            id: 1,
        },
    });
    console.log(token);
}
// test(); 

export default db;