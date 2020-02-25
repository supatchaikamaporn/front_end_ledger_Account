import PersonModel from "./../models/PersonModel";
import BookModel from "./../models/BookModel";
import ListModel from "./../models/ListModel";
import ExtensionModel from "./../models/ExtensionModel";
import MediatorModel from "./../models/MediatorModel";

class FacadeModel {
  async getAll(model) {
    const classModel = await get_class_by_name(model);
    return classModel.getAll().then(data => {
      return data;
    });
  }

  async getById(model, id) {
    const classModel = await get_class_by_name(model);
    return classModel.getAt(id).then(data => {
      return data;
    });
  }

  async add(model, data) {
    const classModel = await get_class_by_name(model);
    if (model == "person") {
      classModel.person = await data;
    } else if (model == "book") {
      classModel.book = await data;
    } else if (model == "list") {
      classModel.list = await data;
    } else if (model == "extension") {
      classModel.extension = await data;
    } else if (model == "mediator") {
      classModel.mediator = await data;
    }
    return classModel.add();
  }

  async deleteById(model, id) {
    const classModel = await get_class_by_name(model);
    return classModel.delete(id);
  }

  async updateById(model, data, id) {
    const classModel = await get_class_by_name(model);
    if (model == "person") {
      classModel.person = await data;
    } else if (model == "book") {
      classModel.book = await data;
    } else if (model == "list") {
      classModel.list = await data;
    } else if (model == "extension") {
      classModel.extension = await data;
    } else if (model == "mediator") {
      classModel.mediator = await data;
    }
    return classModel.update(id);
  }
}

async function get_class_by_name(name) {
  let classModel;
  if (name == "person") {
    classModel = PersonModel;
  } else if (name == "book") {
    classModel = BookModel;
  } else if (name == "list") {
    classModel = ListModel;
  } else if (name == "extension") {
    classModel = ExtensionModel;
  } else if (name == "mediator") {
    classModel = MediatorModel;
  }

  return classModel;
}

export default new FacadeModel();
