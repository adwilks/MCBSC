
export const viewMixins = {
    computed: {
        tileView() {
            if (this.$store.state.content.view === "Tile") {
              return true;
            } else {
              return false;
            }
          },
          listView() {
            if (this.$store.state.content.view === "List") {
              return true;
            } else {
              return false;
            }
          },
    }
}