db = db.getSiblingDB('vdt');

db.createCollection('attendees');

db.attendees.insertMany([
    {
        "id": 1,
        "name": "Bùi Minh Sơn",
        "username": "sonbm",
        "birthyear": "2002",
        "gender": "Nam",
        "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
        "major": "Công nghệ thông tin"
    },
    {
        "id": 2,
        "name": "Đào Đại Hiệp",
        "username": "hiepdd",
        "birthyear": "2001",
        "gender": "Nam",
        "university": "Đại học Bách khoa Hà Nội",
        "major": "Điện tử viễn thông"
    },
    {
        "id": 3,
        "name": "Đỗ Anh Tú",
        "username": "tuda",
        "birthyear": "2002",
        "gender": "Nam",
        "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
        "major": "Mạng máy tính và truyền thông dữ liệu"
    },
    {
        "id": 4,
        "name": "Đỗ Bảo Hoàng",
        "username": "hoangdb",
        "birthyear": "1997",
        "gender": "Nam",
        "university": "Đại học CNTT, cơ khí & quang học St.Petersburg LB Nga",
        "major": "An toàn thông tin"
    },
    {
        "id": 5,
        "name": "Hoàng Quốc Doanh",
        "username": "doanhhq",
        "birthyear": "2001",
        "gender": "Nam",
        "university": "Đại Học Bách Khoa Hà Nội",
        "major": "NULL"
    },
    {
        "id": 6,
        "name": "Le Minh Duc",
        "username": "duclm",
        "birthyear": "2002",
        "gender": "Nam",
        "university": "Đại Học Bách Khoa Hà Nội",
        "major": "Công nghệ thông tin ứng dụng phần mềm"
    },
    {
        "id": 7,
        "name": "Lê Phúc Lai",
        "username": "lailp",
        "birthyear": "2002",
        "gender": "Nam",
        "university": "Đại Học Bách Khoa Hà Nội",
        "major": "Kỹ thuật điện tử viễn thông"
    },
    {
        "id": 8,
        "name": "Lê Quang Anh",
        "username": "anhlq",
        "birthyear": "1997",
        "gender": "Nam",
        "university": "Đại học CNTT, cơ khí & quang học St.Petersburg LB Nga",
        "major": "An toàn thông tin"
    },
    {
        "id": 9,
        "name": "Lê Trọng Minh",
        "username": "minhlt",
        "birthyear": "2000",
        "gender": "Nam",
        "university": "Đại học CNTT, cơ khí & quang học St.Petersburg LB Nga",
        "major": "Kỹ thuật điều khiển và tự động hóa"
    },
    {
        "id": 10,
        "name": "Lê Tùng Lâm",
        "username": "lamlt",
        "birthyear": "1999",
        "gender": "Nam",
        "university": "Đại Học Bách Khoa Hà Nội",
        "major": "Khoa học máy tính"
    },
    {
        "id": 11,
        "name": "Lê Văn Chiến",
        "username": "chienlv",
        "birthyear": "2002",
        "gender": "Nam",
        "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
        "major": "Kỹ thuật hàng không vũ trụ"
    },
    {
        "id": 12,
        "name": "Linh Thi Nguyen",
        "username": "linhnt",
        "birthyear": "2002",
        "gender": "Nữ",
        "university": "Đại Học Bách Khoa Hà Nội",
        "major": "ICT"
    },
    {
        "id": 13,
        "name": "Nguyễn Đại An",
        "username": "annd",
        "birthyear": "2023",
        "gender": "Nam",
        "university": "Đại Học Bách Khoa Hà Nội",
        "major": "Khoa học máy tính"
    },
    {
        "id": 14,
        "name": "Nguyễn Đình Hoàng",
        "username": "hoangnd",
        "birthyear": "2002",
        "gender": "Nam",
        "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
        "major": "Công nghệ thông tin ứng dụng phần mềm"
    },
    {
        "id": 15,
        "name": "Nguyen Duc Vinh Data",
        "username": "vinhnd",
        "birthyear": "2002",
        "gender": "Nam",
        "university": "Học viện Công nghệ Bưu chính Viễn thông",
        "major": "NULL"
    },
    {
        "id": 16,
        "name": "Nguyễn Dương Long",
        "username": "longnd",
        "birthyear": "2002",
        "gender": "Nam",
        "university": "ĐH Thuỷ lợi",
        "major": "Công nghệ thông tin ứng dụng phần mềm"
    },
    {
        "id": 17,
        "name": "Nguyen Huu Thang",
        "username": "thangnh",
        "birthyear": "2000",
        "gender": "Nam",
        "university": "Đại Học Bách Khoa Hà Nội",
        "major": "Khoa học máy tính"
    },
    {
        "id": 18,
        "name": "Nguyễn Mạnh Cường",
        "username": "cuongnm",
        "birthyear": "1997",
        "gender": "Nam",
        "university": "Đại học CNTT, cơ khí & quang học St.Petersburg LB Nga",
        "major": "Điện tử"
    },
    {
        "id": 19,
        "name": "Nguyễn Mạnh Đức",
        "username": "ducnm",
        "birthyear": "2002",
        "gender": "Nam",
        "university": "Học viện Kỹ thuật mật mã",
        "major": "An toàn thông tin"
    },
    {
        "id": 20,
        "name": "Nguyễn Ngọc Chung",
        "username": "chungnn",
        "birthyear": "2002",
        "gender": "Nam",
        "university": "Học viên Công nghệ Bưu chính Viễn Thông HCM",
        "major": "NULL"
    },
    {
        "id": 21,
        "name": "Nguyễn Tuấn Anh",
        "username": "anhnt",
        "birthyear": "1997",
        "gender": "Nam",
        "university": "Đại học CNTT, cơ khí & quang học St.Petersburg LB Nga",
        "major": "An toàn thông tin"
    },
    {
        "id": 22,
        "name": "Nguyễn Văn Quang",
        "username": "quangnv",
        "birthyear": "1997",
        "gender": "Nam",
        "university": "Đại học CNTT, cơ khí & quang học St.Petersburg LB Nga",
        "major": "An toàn thông tin"
    },
    {
        "id": 23,
        "name": "Ninh Chí Hướng",
        "username": "huongnc",
        "birthyear": "2002",
        "gender": "Nam",
        "university": "Học viện Công nghệ Bưu chính viễn thông",
        "major": "An toàn thông tin"
    },
    {
        "id": 24,
        "name": "Ninh Văn Nghĩa",
        "username": "nghianv",
        "birthyear": "2001",
        "gender": "Nam",
        "university": "Đại Học Bách Khoa Hà Nội",
        "major": "Khoa học máy tính"
    },
    {
        "id": 25,
        "name": "Phạm Anh Đức",
        "username": "ducpa",
        "birthyear": "2001",
        "gender": "Nam",
        "university": "Đại học Bách Khoa Hà Nội",
        "major": "Toán ứng dụng và tin học"
    },
    {
        "id": 26,
        "name": "Phạm Duy Cương",
        "username": "cuongpd",
        "birthyear": "1997",
        "gender": "Nam",
        "university": "Đại học CNTT, cơ khí & quang học St.Petersburg LB Nga",
        "major": "Công nghệ điện tử"
    },
    {
        "id": 27,
        "name": "Phạm Hồng Thanh",
        "username": "thanhph",
        "birthyear": "1998",
        "gender": "Nam",
        "university": "Swinburne University",
        "major": "Phát triển phần mềm"
    },
    {
        "id": 28,
        "name": "Phạm Thị Khánh Linh",
        "username": "linhptk",
        "birthyear": "2002",
        "gender": "Nữ",
        "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
        "major": "Mạng máy tính và truyền thông dữ liệu"
    },
    {
        "id": 29,
        "name": "Phạm Văn Tới",
        "username": "toipv",
        "birthyear": "2002",
        "gender": "Nam",
        "university": "Học viện Công nghệ Bưu chính viễn thông",
        "major": "Công nghệ thông tin ứng dụng phần mềm"
    },
    {
        "id": 30,
        "name": "Trần Đức Mạnh",
        "username": "manhtd",
        "birthyear": "1998",
        "gender": "Nam",
        "university": "Đại học CNTT, cơ khí & quang học St.Petersburg LB Nga",
        "major": "Bảo mật thông tin"
    },
    {
        "id": 31,
        "name": "Trần Mạnh Dũng",
        "username": "dungtm",
        "birthyear": "2001",
        "gender": "Nam",
        "university": "Học viện Công nghệ Bưu chính Viễn thông",
        "major": "Điện tử viễn thông"
    },
    {
        "id": 32,
        "name": "Trần Minh Dương",
        "username": "duongtm",
        "birthyear": "2002",
        "gender": "Nam",
        "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
        "major": "Mạng máy tính và truyền thông dữ liệu"
    },
    {
        "id": 33,
        "name": "Trần Xuân Phú",
        "username": "phutx",
        "birthyear": "2001",
        "gender": "Nam",
        "university": "Trường Đại học Công nghệ thông tin - ĐHQG Tp.Hồ chí Minh",
        "major": "Khoa học máy tính"
    },
    {
        "id": 34,
        "name": "Vũ Hoàng Long",
        "username": "longvh",
        "birthyear": "2001",
        "gender": "Nam",
        "university": "Đại học Bách Khoa Hà Nội",
        "major": "Khoa học máy tính"
    },
    {
        "id": 35,
        "name": "Vũ Minh Hiếu",
        "username": "hieuvm",
        "birthyear": "2000",
        "gender": "Nam",
        "university": "Đại học CNTT, cơ khí & quang học St.Petersburg LB Nga",
        "major": "Kỹ thuật phần mềm"
    }
]);

