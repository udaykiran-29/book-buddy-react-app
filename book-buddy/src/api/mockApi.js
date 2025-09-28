export const users = [
  { "id": 101, "name": "Aarav Sharma", "email": "aarav@example.com", "avatar": "https://i.pravatar.cc/150?u=101" },
  { "id": 102, "name": "Ananya Gupta", "email": "ananya@example.com", "avatar": "https://i.pravatar.cc/150?u=102" },
  { "id": 103, "name": "Vihaan Patel", "email": "vihaan@example.com", "avatar": "https://i.pravatar.cc/150?u=103" },
  { "id": 104, "name": "Ishita Reddy", "email": "ishita@example.com", "avatar": "https://i.pravatar.cc/150?u=104" },
  { "id": 105, "name": "Kabir Mehta", "email": "kabir@example.com", "avatar": "https://i.pravatar.cc/150?u=105" },
  { "id": 106, "name": "Myra Khan", "email": "myra@example.com", "avatar": "https://i.pravatar.cc/150?u=106" },
  { "id": 107, "name": "Arjun Nair", "email": "arjun@example.com", "avatar": "https://i.pravatar.cc/150?u=107" },
  { "id": 108, "name": "Sara D’Souza", "email": "sara@example.com", "avatar": "https://i.pravatar.cc/150?u=108" },
  { "id": 109, "name": "Rohan Das", "email": "rohan@example.com", "avatar": "https://i.pravatar.cc/150?u=109" },
  { "id": 110, "name": "Zoya Iqbal", "email": "zoya@example.com", "avatar": "https://i.pravatar.cc/150?u=110" }
];

export const books = [
  { "id": 1, "title": "The Magic Treehouse", "author": "Mary Pope Osborne", "genre": "Adventure", "ageGroup": "7-10", "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXX0F6XqgH-Oj2ldsRb_XRwt8XT-0CnuWog&s", "availabilityType": "Free", "status": "Available", "ownerId": 101 },
  { "id": 2, "title": "Charlie and the Chocolate Factory", "author": "Roald Dahl", "genre": "Fantasy", "ageGroup": "8-12", "coverImage": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Charlie_and_the_Chocolate_Factory_%282005%29_Coverart.png/250px-Charlie_and_the_Chocolate_Factory_%282005%29_Coverart.png", "availabilityType": "Exchange", "status": "Available", "ownerId": 102 },
  { "id": 3, "title": "Diary of a Wimpy Kid", "author": "Jeff Kinney", "genre": "Humor", "ageGroup": "9-13", "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT839Y6Xmm-v57CFePWsZU5QDWEIL80TggJJw&s", "availabilityType": "Free", "status": "Available", "ownerId": 103 },
  { "id": 4, "title": "Harry Potter", "author": "J.K. Rowling", "genre": "Fantasy", "ageGroup": "10-14", "coverImage": "https://w0.peakpx.com/wallpaper/720/231/HD-wallpaper-harry-potter-top-37-best-harry-potter-hq-cool-harry-potter.jpg", "availabilityType": "Exchange", "status": "Available", "ownerId": 104 },
  { "id": 5, "title": "Matilda", "author": "Roald Dahl", "genre": "Fiction", "ageGroup": "7-11", "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipnFs3zAC4RsKKdPX2v-sP7Fj67j1IYc1vg&s", "availabilityType": "Free", "status": "Available", "ownerId": 105 },
  { "id": 6, "title": "Percy Jackson", "author": "Rick Riordan", "genre": "Fantasy", "ageGroup": "11-14", "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWU260Sv32sW3R3OOLOnhqOqY749zQJBlXlA&s", "availabilityType": "Exchange", "status": "Available", "ownerId": 106 },
  { "id": 7, "title": "Charlotte’s Web", "author": "E.B. White", "genre": "Classic", "ageGroup": "6-10", "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dQjvEz2k0Nzp49ufBWAplfL-qta6vn1mrg&s", "availabilityType": "Free", "status": "Available", "ownerId": 107 },
  { "id": 8, "title": "The Cat in the Hat", "author": "Dr. Seuss", "genre": "Picture Book", "ageGroup": "4-7", "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvWDxOE91ZhJVSK_QIrm1Ye9IyYtP2U8AtA&s", "availabilityType": "Free", "status": "Available", "ownerId": 108 },
  { "id": 9, "title": "The Secret Garden", "author": "Frances Hodgson Burnett", "genre": "Classic", "ageGroup": "8-12", "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUr4yoRhkiherCGwGgEPyEPiVClRKu1etlQ&s", "availabilityType": "Exchange", "status": "Available", "ownerId": 109 },
  { "id": 10, "title": "The Little Prince", "author": "Antoine de Saint-Exupéry", "genre": "Classic", "ageGroup": "7-12", "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr97y6266rHzvDcbbIj2OO_N7pv3F0gR53fg&s", "availabilityType": "Free", "status": "Available", "ownerId": 110 }
];

export const requests = [
  { "id": 201, "bookId": 2, "ownerId": 102, "requesterId": 105, "type": "Exchange", "offeredBookId": 5, "status": "Pending" },
  { "id": 202, "bookId": 3, "ownerId": 103, "requesterId": 101, "type": "Free", "offeredBookId": null, "status": "Approved" },
  { "id": 203, "bookId": 6, "ownerId": 106, "requesterId": 104, "type": "Exchange", "offeredBookId": 4, "status": "Rejected" },
  { "id": 204, "bookId": 7, "ownerId": 107, "requesterId": 108, "type": "Free", "offeredBookId": null, "status": "Pending" },
  { "id": 205, "bookId": 9, "ownerId": 109, "requesterId": 110, "type": "Exchange", "offeredBookId": 10, "status": "Pending" },
  { "id": 206, "bookId": 1, "ownerId": 101, "requesterId": 102, "type": "Free", "offeredBookId": null, "status": "Shared" }
];