import { ObjectId } from "mongodb";
import { CustomersData } from "./db.js";

export class Customer {
  constructor(customer) {
    this.lastName = customer.lastName;
    this.firstName = customer.firstName;
    this.address = customer.address;
    this.mobile = customer.mobile;
  }

  static create = (newCustomer, result) => {
    //try {
    CustomersData.insertOne(newCustomer, function (err, res) {
      if (err) throw result(err, null);
      result(null, res);
    });
    /*} finally {
      connection.close();
    }*/
  };

  static findByName = (name, result) => {
    try {
      const options = {
        projection: { name: 0, firstName: 1, lastName: 1 },
      };
      const user = CustomersData.findOne({
        $or: [{ lastName: name }, { firstName: name }],
      }).then((user) => result(null, user));
    } catch (e) {
      console.log(`error ${e}`);
      result(e, null);
    } /* finally {
      connection.close();
    }*/
  };

  static findById = (customerId, result) => {
    try {
      const options = {
        projection: { _id: 0, firstName: 1, lastName: 1 },
      };
      const customer = CustomersData.findOne({
        _id: ObjectId(customerId),
      }).then((customer) => result(null, customer));
    } catch (e) {
      console.log(`error ${e}`);
      result(e, null);
    } /* finally {
      connection.close();
    }*/
  };

  static findAll = (result) => {
    //try {
    const options = {
      projection: { _id: 0, firstName: 1, lastName: 1 },
    };
    let customerCursor = CustomersData.find({});
    customerCursor.toArray((err, res) => {
      if (err) {
        console.log(`error: ${err}`);
        result(err, null);
        return;
      } else {
        console.log(`customers list ${res}`);

        result(null, res);
      }
    });
    /*} finally {
      connection.close();
    }*/
  };

  static updateById = (customerId, customerUpdated, result) => {
    const myquery = { _id: ObjectId(customerId) };
    try {
      CustomersData.updateOne(
        myquery,
        { $set: customerUpdated },
        function (err, res) {
          if (err) result(err, null);
          console.log("customers updated");
          result(null, res);
        }
      );
    } catch (e) {
      console.log(e.message || "Unable to update customer");
    } /* finally {
      connection.close();
    }*/
  };

  static deleteById = (customerId, result) => {
    const myquery = { _id: ObjectId(customerId) };
    try {
      CustomersData.deleteOne(myquery, (err, res) => {
        if (err) result(err, null);
        console.log("customer deleted");
        result(err, res);
      });
    } catch (e) {
      console.log(e.message || "Unable to delete customer");
    } /* finally {
      connection.close();
    }*/
  };
}
