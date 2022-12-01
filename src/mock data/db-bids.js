import uuid from "react-uuid";

const bids = [
    {
        reg_ref: uuid(),
        title: "Signed ball",
        base_price: 5000,
        bid_type: "Minimum Bid Auction",
        is_using_ai: false,
        category: "",
        other_category: "",
        upload_file: require("./bid-assets/cricketball.jpg"),
        start_date: "",
        end_date: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab vitae qui tempore illum ducimus ut et mollitia recusandae quibusdam asperiores, impedit aliquid repellat nostrum maiores quos? Iusto, nam architecto!",
    },
    {
        reg_ref: uuid(),
        title: "Gift basket",
        base_price: 1150,
        bid_type: "Minimum Bid Auction",
        is_using_ai: false,
        category: "",
        other_category: "",
        upload_file: require("./bid-assets/giftbasket.jpg"),
        start_date: "",
        end_date: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab vitae qui tempore illum ducimus ut et mollitia recusandae quibusdam asperiores, impedit aliquid repellat nostrum maiores quos? Iusto, nam architecto!",
    },
    {
        reg_ref: uuid(),
        title: "The book by a lost author",
        base_price: 2250,
        bid_type: "Minimum Bid Auction",
        is_using_ai: false,
        category: "",
        other_category: "",
        upload_file: require("./bid-assets/vintagebook.jpeg"),
        start_date: "",
        end_date: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab vitae qui tempore illum ducimus ut et mollitia recusandae quibusdam asperiores, impedit aliquid repellat nostrum maiores quos? Iusto, nam architecto!Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab vitae qui tempore illum ducimus ut et mollitia recusandae quibusdam asperiores, impedit aliquid repellat nostrum maiores quos? Iusto, nam architecto!",
    },
    {
        reg_ref: uuid(),
        title: "Jack Nicklaus' Golf club",
        base_price: 2600,
        bid_type: "Minimum Bid Auction",
        is_using_ai: false,
        category: "",
        other_category: "",
        upload_file: require("./bid-assets/golfclub.jpg"),
        start_date: "",
        end_date: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab vitae qui tempore illum ducimus ut et mollitia recusandae quibusdam asperiores, impedit aliquid repellat nostrum maiores quos? Iusto, nam architecto!",
    },
    {
        reg_ref: uuid(),
        title: "Catawiki's Beer bottle",
        base_price: 4589,
        bid_type: "Minimum Bid Auction",
        is_using_ai: false,
        category: "",
        other_category: "",
        upload_file: require("./bid-assets/vintagebeer.jpg"),
        start_date: "",
        end_date: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab vitae qui tempore illum ducimus ut et mollitia recusandae quibusdam asperiores, impedit aliquid repellat nostrum maiores quos? Iusto, nam architecto!",
    },
    {
        reg_ref: uuid(),
        title: "Peter Kabuki's chair",
        base_price: 589,
        bid_type: "Minimum Bid Auction",
        is_using_ai: false,
        category: "",
        other_category: "",
        upload_file: require("./bid-assets/peterchair.jpeg"),
        start_date: "",
        end_date: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab vitae qui tempore illum ducimus ut et mollitia recusandae quibusdam asperiores, impedit aliquid repellat nostrum maiores quos? Iusto, nam architecto!",
    }
]

export { bids };