<template>
  <div class="party">
    <!------------------------ START OF GRID --------------------------------->
    <div class="mt-5">
      <b-button-group size="sm" class="pb-5 filters">
        <b-button class="mx-1 filter" variant="dark" v-on:click="setFilter('all')">All</b-button>
        <b-button class="mx-1 filter" variant="dark" v-on:click="setFilter('tag1')">Tag 1</b-button>
        <b-button class="mx-1 filter" variant="dark" v-on:click="setFilter('tag2')">Tag 2</b-button>
        <b-button class="mx-1 filter" variant="dark" v-on:click="setFilter('tag3')">Tag 3</b-button>
      </b-button-group>

      <b-container fluid class="flex-container">
        <b-row>
          <b-col>
            <transition-group name="list-complete" class="list-complete" tag="section">
              <div v-for="item in filteredItems" :key="item.id" class="list-complete-item">
                <b-col class="box-container">
                  <h4 class="skill-title">{{ item.title }}</h4>
                  <ul class="skill-box">
                    <li v-for="listItem in item.listItems" :key="listItem.item">{{ listItem.name }}</li>
                  </ul>
                </b-col>
              </div>
            </transition-group>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "Project3",
  data() {
    return {
      items: [
        {
          id: 1,
          tags: ["all", "tag1"],
          title: "Frameworks",
          listItems: [{ name: "skill1" }, { name: "skill2" }]
        },
        { id: 2, tags: ["all", "tag2"], title: "Title2" },
        { id: 3, tags: ["all", "tag2"], title: "Title3" },
        { id: 4, tags: ["all", "tag1"], title: "Title4" },
        { id: 5, tags: ["all", "tag1"], title: "Title5" }
      ],
      currentTag: "all"
    };
  },
  computed: {
    filteredItems: function() {
      var filter = this.currentTag;
      return this.items.filter(function(item) {
        return item.tags.indexOf(filter) !== -1;
      });
    }
  },
  methods: {
    setFilter: function(tag) {
      this.currentTag = tag;
    },
    toggleShow(i) {
      this.items[i].isShowing = !this.items[i].isShowing;
    }
  }
};
</script>
<style scoped>
.page-wrapper {
  max-width: 80%;
  margin: 0 auto;
  padding: 0 1rem;
}
.section-wrapper {
  border-radius: 3px;
  border: 1px solid #fafafa;
  /* -webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15); */
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  margin-top: -3rem;
  background: white;
}
.flex-container {
  display: flex;
  justify-content: center;
}
.flex-column {
  max-width: 260px;
}
.box {
  position: relative;
  border-radius: 3px;
  border: 1px solid #fafafa;
  /* -webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15); */
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  background: white;
  margin: 10px;
  overflow: hidden !important;
  transition: all 0.2s linear;
  position: relative;
}
/* IMAGE */
.img-contain {
  position: relative;
}
.scale {
  transform: scaleY(1.05);
  padding-top: 5px;
}
/* SHUFFLE */
.projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.project {
  transition: all 0.35s ease-in-out;
  box-shadow: 0px 2px 8px lightgrey;
  flex-basis: 1 1 50%;
}
.group-img {
  object-fit: cover;
  height: auto;
  width: 100%;
}
.filter {
  border-radius: 6px !important;
  transition: all 0.35s !important;
  text-transform: uppercase;
}
/****** HOVER EFFECT ********/
.overlay {
  width: 100%;
  height: 100%;
  opacity: 1;
  position: absolute;
  bottom: 0;
}
.overlay-border {
  height: 90%;
  margin: 0.5rem 0.5rem 0 0.5rem;
  position: relative;
  border: 2px solid black;
}
.overlay-title {
  position: absolute;
  background-color: rgb(0, 0, 0);
  bottom: 0px;
  width: 100%;
  padding: 7px 0;
  color: white;
  margin: 0 !important;
  line-height: 1 !important;
}
/* TRANSITIONS */
.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}
.projects-leave-to {
  transform: translatey(30px);
  opacity: 0;
}
.projects-leave-active {
  position: absolute;
  z-index: -1;
}
/* MEDIA QUERIES */
@media (min-width: 576px) {
  .overlay {
    opacity: 0;
  }
  .overlay:hover {
    opacity: 1;
    transition: 0.3s opacity ease-out;
  }
  .box:hover {
    box-shadow: 2px 8px 45px rgba(0, 0, 0, 0.15);
    transform: scale3d(1.1, 1.1, 1.1);
  }
}
</style>