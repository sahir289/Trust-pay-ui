import _ from "lodash";
import products, { type Product } from "./products";
import { type Category } from "./categories";
import users, { type User } from "./users";
import dayjs from "dayjs";

export interface Review {
  id: number;
  product: Product;
  user: User;
  rating: number;
  comment: string;
  date: string;
}

const fakers = {
  fakeReviews() {
    const reviews: Array<Review> = [
      {
        id: 1,
        product: products.fakeProducts()[0] ?? {
          images: [],
          name: "Default Product",
          price: 0,
          isActive: false,
          category: "DefaultCategory" as unknown as Category,
          stock: 0,
          buyers: [],
          slug: "default-product",
        },
        user: users.fakeUsers()[0] ?? {
          name: "Default User",
          email: "default@example.com",
          isActive: false,
          position: "Default Position",
          photo: "default-photo-url",
          phone: "000-000-0000",
          department: "Default Department",
          location: "Default Location",
          joinedDate: "Default Date",
          manager: "Default Manager",
          addressLine1: "Default Address Line 1",
          addressLine2: "Default Address Line 2",
        },
        rating: 4.5,
        comment: "Great product, excellent build quality.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 2,
        product: products.fakeProducts()[0] ?? {
          images: [],
          name: "Default Product",
          price: 0,
          isActive: false,
          category: "DefaultCategory" as unknown as Category,
          stock: 0,
          buyers: [],
          slug: "default-product",
        },
        user: users.fakeUsers()[0] ?? {
          name: "Default User",
          email: "default@example.com",
          isActive: false,
          position: "Default Position",
          photo: "default-photo-url",
          phone: "000-000-0000",
          department: "Default Department",
          location: "Default Location",
          joinedDate: "Default Date",
          manager: "Default Manager",
          addressLine1: "Default Address Line 1",
          addressLine2: "Default Address Line 2",
        },
        rating: 3.2,
        comment: "Average performance, could be better.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 3,
        product: products.fakeProducts()[0] ?? {
          images: [],
          name: "Default Product",
          price: 0,
          isActive: false,
          category: "DefaultCategory" as unknown as Category,
          stock: 0,
          buyers: [],
          slug: "default-product",
        },
        user: users.fakeUsers()[0] ?? {
          name: "Default User",
          email: "default@example.com",
          isActive: false,
          position: "Default Position",
          photo: "default-photo-url",
          phone: "000-000-0000",
          department: "Default Department",
          location: "Default Location",
          joinedDate: "Default Date",
          manager: "Default Manager",
          addressLine1: "Default Address Line 1",
          addressLine2: "Default Address Line 2",
        },
        rating: 5.0,
        comment: "Absolutely love it! Best purchase ever.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 4,
        product: products.fakeProducts()[0] ?? {
          images: [],
          name: "Default Product",
          price: 0,
          isActive: false,
          category: "DefaultCategory" as unknown as Category,
          stock: 0,
          buyers: [],
          slug: "default-product",
        },
        user: users.fakeUsers()[0] ?? {
          name: "Default User",
          email: "default@example.com",
          isActive: false,
          position: "Default Position",
          photo: "default-photo-url",
          phone: "000-000-0000",
          department: "Default Department",
          location: "Default Location",
          joinedDate: "Default Date",
          manager: "Default Manager",
          addressLine1: "Default Address Line 1",
          addressLine2: "Default Address Line 2",
        },
        rating: 2.8,
        comment: "Not worth the price, disappointed.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 5,
        product: products.fakeProducts()[0] ?? {
          images: [],
          name: "Default Product",
          price: 0,
          isActive: false,
          category: "DefaultCategory" as unknown as Category,
          stock: 0,
          buyers: [],
          slug: "default-product",
        },
        user: users.fakeUsers()[0] ?? {
          name: "Default User",
          email: "default@example.com",
          isActive: false,
          position: "Default Position",
          photo: "default-photo-url",
          phone: "000-000-0000",
          department: "Default Department",
          location: "Default Location",
          joinedDate: "Default Date",
          manager: "Default Manager",
          addressLine1: "Default Address Line 1",
          addressLine2: "Default Address Line 2",
        },
        rating: 4.0,
        comment: "Good value for money, works as expected.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 6,
        product: products.fakeProducts()[0] ?? {
          images: [],
          name: "Default Product",
          price: 0,
          isActive: false,
          category: "DefaultCategory" as unknown as Category,
          stock: 0,
          buyers: [],
          slug: "default-product",
        },
        user: users.fakeUsers()[0] ?? {
          name: "Default User",
          email: "default@example.com",
          isActive: false,
          position: "Default Position",
          photo: "default-photo-url",
          phone: "000-000-0000",
          department: "Default Department",
          location: "Default Location",
          joinedDate: "Default Date",
          manager: "Default Manager",
          addressLine1: "Default Address Line 1",
          addressLine2: "Default Address Line 2",
        },
        rating: 4.7,
        comment: "Impressive product, highly recommended.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 7,
        product: products.fakeProducts()[0] ?? {
          images: [],
          name: "Default Product",
          price: 0,
          isActive: false,
          category: "DefaultCategory" as unknown as Category,
          stock: 0,
          buyers: [],
          slug: "default-product",
        },
        user: users.fakeUsers()[0] ?? {
          name: "Default User",
          email: "default@example.com",
          isActive: false,
          position: "Default Position",
          photo: "default-photo-url",
          phone: "000-000-0000",
          department: "Default Department",
          location: "Default Location",
          joinedDate: "Default Date",
          manager: "Default Manager",
          addressLine1: "Default Address Line 1",
          addressLine2: "Default Address Line 2",
        },
        rating: 3.5,
        comment: "Decent product, but has some flaws.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 8,
        product: products.fakeProducts()[0] ?? {
          images: [],
          name: "Default Product",
          price: 0,
          isActive: false,
          category: "DefaultCategory" as unknown as Category,
          stock: 0,
          buyers: [],
          slug: "default-product",
        },
        user: users.fakeUsers()[0] ?? {
          name: "Default User",
          email: "default@example.com",
          isActive: false,
          position: "Default Position",
          photo: "default-photo-url",
          phone: "000-000-0000",
          department: "Default Department",
          location: "Default Location",
          joinedDate: "Default Date",
          manager: "Default Manager",
          addressLine1: "Default Address Line 1",
          addressLine2: "Default Address Line 2",
        },
        rating: 4.2,
        comment: "Satisfied with the purchase, good quality.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 9,
        product: products.fakeProducts()[0] ?? {
          images: [],
          name: "Default Product",
          price: 0,
          isActive: false,
          category: "DefaultCategory" as unknown as Category,
          stock: 0,
          buyers: [],
          slug: "default-product",
        },
        user: users.fakeUsers()[0] ?? {
          name: "Default User",
          email: "default@example.com",
          isActive: false,
          position: "Default Position",
          photo: "default-photo-url",
          phone: "000-000-0000",
          department: "Default Department",
          location: "Default Location",
          joinedDate: "Default Date",
          manager: "Default Manager",
          addressLine1: "Default Address Line 1",
          addressLine2: "Default Address Line 2",
        },
        rating: 3.0,
        comment: "Not what I expected, needs improvement.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 10,
        product: products.fakeProducts()[0] ?? {
          images: [],
          name: "Default Product",
          price: 0,
          isActive: false,
          category: "DefaultCategory" as unknown as Category,
          stock: 0,
          buyers: [],
          slug: "default-product",
        },
        user: users.fakeUsers()[0] ?? {
          name: "Default User",
          email: "default@example.com",
          isActive: false,
          position: "Default Position",
          photo: "default-photo-url",
          phone: "000-000-0000",
          department: "Default Department",
          location: "Default Location",
          joinedDate: "Default Date",
          manager: "Default Manager",
          addressLine1: "Default Address Line 1",
          addressLine2: "Default Address Line 2",
        },
        rating: 4.8,
        comment: "Outstanding product, exceeded my expectations.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
    ];

    return _.shuffle(reviews);
  },
};

export default fakers;
