<template>
  <div class="content-blocks portfolio hidex">
    <section class="content">
      <div class="block-content">
        <h3 class="block-title">Portfolio</h3>
        <div class="row">
          <div class="col-md-12">
            <ul id="filters">
              <li class="active" data-filter="*">All</li>
              <li data-filter=".graphic">Graphic</li>
              <li data-filter=".web">Web</li>
              <li data-filter=".video">Video</li>
              <li data-filter=".apps">Apps</li>
            </ul>
            <div id="projects">
              <div class="project graphic apps">
                <a class="open-project" href="/luxuryWatch">
                  <div class="project-overlay">
                    <div class="vcenter">
                      <div class="centrize">
                        <h4>Luxury Watch</h4>
                        <p>Graphic / Apps</p>
                      </div>
                    </div>
                  </div>
                </a>
                <img src="statics/images/portfolio/1.jpg" alt />
              </div>
              <div class="project web apps">
                <a
                  class="open-project"
                  data-toggle="modal"
                  href="/colorfulTees"
                  data-target="#modal"
                >
                  <div class="project-overlay">
                    <div class="vcenter">
                      <div class="centrize">
                        <h4>Colorful Tees</h4>
                        <p>Web / Apps</p>
                      </div>
                    </div>
                  </div>
                </a>
                <img src="statics/images/portfolio/2.jpg" alt />
              </div>
              <div class="project graphic video">
                <a class="open-project" href="/luxuryWatch">
                  <div class="project-overlay">
                    <div class="vcenter">
                      <div class="centrize">
                        <h4>Coffee Cups</h4>
                        <p>Graphic / Video</p>
                      </div>
                    </div>
                  </div>
                </a>
                <img src="statics/images/portfolio/3.jpg" alt />
              </div>
              <div class="project graphic">
                <a class="open-project" href="/luxuryWatch">
                  <div class="project-overlay">
                    <div class="vcenter">
                      <div class="centrize">
                        <h4>Stationary Branding</h4>
                        <p>Web</p>
                      </div>
                    </div>
                  </div>
                </a>
                <img src="statics/images/portfolio/4.jpg" alt />
              </div>
              <div class="project web video">
                <a class="open-project" href="/luxuryWatch">
                  <div class="project-overlay">
                    <div class="vcenter">
                      <div class="centrize">
                        <h4>Typewriter</h4>
                        <p>Graphic / Video</p>
                      </div>
                    </div>
                  </div>
                </a>
                <img src="statics/images/portfolio/5.jpg" alt />
              </div>
              <div class="project apps web">
                <a class="open-project" href="/luxuryWatch">
                  <div class="project-overlay">
                    <div class="vcenter">
                      <div class="centrize">
                        <h4>Magazine Cover</h4>
                        <p>Web / Apps</p>
                      </div>
                    </div>
                  </div>
                </a>
                <img src="statics/images/portfolio/6.jpg" alt />
              </div>
              <div class="project video web">
                <a class="open-project" href="/luxuryWatch">
                  <div class="project-overlay">
                    <div class="vcenter">
                      <div class="centrize">
                        <h4>An Ipad</h4>
                        <p>Video / Web</p>
                      </div>
                    </div>
                  </div>
                </a>
                <img src="statics/images/portfolio/7.jpg" alt />
              </div>
            </div>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-md-12">
            <h4>Interested in working together?</h4>
            <a class="btn lowercase" onclick="contact();">sungkuk5420@gmail.com</a>
            <br />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NameBlock from "../projects/Home/NameBlock";
import MenuBlock from "../projects/Home/MenuBlock";
import ContentBlock from "../projects/Home/ContentBlock";
export default {
  name: "Portfolio",
  components: {
    NameBlock,
    MenuBlock,
    ContentBlock
  },
  mounted() {
    if (detectMobile()) {
      $("#project-modal").css("overflow-y", "scroll");
      $("#post-modal").css("overflow-y", "scroll");
      $(".content-blocks").css("overflow-y", "scroll");
    } else {
      new IScroll(".content-blocks.portfolio", {
        scrollbars: true,
        mouseWheel: true
      });
    }

    var $container = $("#projects");
    $container.isotope({
      masonry: {
        columnWidth: 0
      },
      itemSelector: ".project"
    });

    //Portfolio filters
    $("#filters").on("click", "li", function() {
      $("#filters li").removeClass("active");
      $(this).addClass("active");
      var filterValue = $(this).attr("data-filter");
      $container.isotope({ filter: filterValue });
    });
  },
  methods: {
    movePage(pageName) {
      this.$router.push(pageName);
    }
  }
};
</script>

<style lang="scss">
.index-page {
  display: block;
}
</style>
