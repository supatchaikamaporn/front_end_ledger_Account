<template>
  <q-page class="bg-grey-3 column">
    <q-list class="bg-white" separator bordered>
      <div class="row q-pa-sm bg-primary">
        <q-input
          @keyup.enter="addTask"
          class="col"
          square
          filled
          v-model="newTask"
          placeholder="เพิ่มรายการ"
          bg-color="white"
          dense
        >
          <template v-slot:append>
            <q-btn @click="addTask" round dense flat icon="add" />
          </template>
        </q-input>
      </div>

      <q-item
        clickable
        @click="task.done!=task.done"
        v-for="(task,index) in tasks"
        :key="index"
        tag="label"
        v-ripple
        :class="{'done bg-blue-1':task.done}"
      >
        <q-item-section avatar>
          <q-checkbox class="no-pointer-events" v-model="task.done" val="teal" color="teal" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done">
          <q-btn @click.stop="deleteTask(index)" flat round color="primary" icon="card_giftcard" />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length" class="no-task absolute-center">
      <q-icon name="check" size="100px" color="primary" />
      <div class="text-h5 text-primary text-center">ไม่มีรายการ</div>
    </div>
  </q-page>
</template>

<script>
// import PersonModel from "./../models/PersonModel";
// import BookModel from "./../models/BookModel";
// import ListModel from "./../models/ListModel";
// import ExtensionModel from "./../models/ExtensionModel";
// import MediatorModel from "./../models/MediatorModel";
import FacadeModel from "./../utility/FacadeModel";
import ExtensionData from "./../data/ExtensionData";

export default {
  data() {
    return {
      newTask: "",
      tasks: [
        // { title: "Get bananas", done: false },
        // { title: "Eat bananas", done: false },
        // { title: "Poo bananas", done: false }
      ]
    };
  },
  async mounted() {
    let facadeModel = FacadeModel;
    let books = [];
    let person = [];
    let extensionData = ExtensionData;

    // get all drom facade
    // facadeModel.getAll("book").then(response => {
    //   response.data.map(item => {
    //     books.push(item);
    //   });
    // });
    // console.log(books);
    //  get all  facade

    // get at drom facade
    // facadeModel.getById("person", 5).then(response => {
    //   response.data.map(item => {
    //     person.push(item);
    //   });
    // });
    // console.log(person);
    //  get at  facade

    // // add data drom facade
    // extensionData.lae_descript = "pondpondpondsad";
    // facadeModel.add("extension", extensionData).then(response => {
    //   console.log(response);
    // });
    // //  add data  facade

    // // add data drom facade
    // facadeModel.deleteById("extension", 10).then(response => {
    //   console.log(response);
    // });
    // //  add data  facade

    // add data drom facade
    // extensionData.lae_descript = "อัพเดทปอนด์";
    // facadeModel.updateById("extension",extensionData, 11).then(response => {
    //   console.log(response);
    // });
    //  add data  facade

    // let personModel = await PersonModel;

    // console.log("<--- debug class personModel --->");
    // // await personModel.getAll();
    // // console.log(await personModel.persons);
    // // await personModel.persons.map(person => {
    // //   console.log(person);
    // // });
    // // await personModel.getAt(1);
    // // console.log(await personModel.person);
    // // console.log(await personModel.person);
    // // console.log(await personModel.add());
    // // console.log(await personModel.update(5));
    // // console.log(await personModel.delete(23));
    // console.log("<--- debug class personModel --->");

    // let bookModel = await BookModel;

    // console.log("<--- debug class bookModel --->");
    // // await bookModel.getAll();
    // // console.log(await bookModel.books);
    // // await bookModel.books.map(book => {
    // //   console.log(book);
    // // });
    // // await bookModel.getAt(1);
    // // console.log(await bookModel.book);
    // // console.log(await bookModel.add());
    // // console.log(await bookModel.update(5));
    // // console.log(await bookModel.delete(23));
    // console.log("<--- debug class bookModel --->");

    // let listModel = await ListModel;

    // console.log("<--- debug class listModel --->");
    // // await listModel.getAll();
    // // console.log(await listModel.lists);
    // // await listModel.lists.map(list => {
    // //   console.log(list);
    // // });
    // // await listModel.getAt(1);
    // // console.log(await listModel.list);
    // // console.log(await listModel.add());
    // // console.log(await listModel.update(5));
    // // console.log(await listModel.delete(23));
    // console.log("<--- debug class listModel --->");

    // let extensionModel = await ExtensionModel;

    // console.log("<--- debug class extensionModel --->");
    // // await extensionModel.getAll();
    // // console.log(await extensionModel.extensions);
    // // await extensionModel.extensions.map(extension => {
    // //   console.log(extension);
    // // });
    // // await extensionModel.getAt(1);
    // // console.log(await extensionModel.extension);
    // // console.log(await extensionModel.add());
    // // console.log(await extensionModel.update(2));
    // // console.log(await extensionModel.delete(2));
    // console.log("<--- debug class extensionModel --->");

    // let mediatorModel = await MediatorModel;

    // console.log("<--- debug class mediatorModel --->");
    // // await mediatorModel.getAll();
    // // console.log(await mediatorModel.mediators);
    // // await mediatorModel.mediators.map(mediator => {
    // //   console.log(mediator);
    // // });
    // // await mediatorModel.getAt(1);
    // // console.log(await mediatorModel.mediator);
    // // console.log(await mediatorModel.add());
    // // console.log(await mediatorModel.update(2));
    // // console.log(await mediatorModel.delete(2));
    // console.log("<--- debug class mediatorModel --->");
  },
  methods: {
    addTask() {
      this.tasks.push({
        title: this.newTask,
        done: false
      });
      this.newTask = "";
    },
    deleteTask(index) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete",
          cancel: true,
          persisten: true
        })
        .onOk(() => {
          this.tasks.splice(index, 1);
          this.$q.notify("Task delete");
        });
    }
  }
};
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbbbbb;
  }
}
.no-task {
  opacity: 0.5;
}
</style>