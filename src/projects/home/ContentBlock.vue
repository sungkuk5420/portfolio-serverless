<template>
  <div class="content-blocks about hidex">
    <section class="content" id="about">
      <div class="block-content">
        <h3 data-langtext class="block-title">自己紹介</h3>
        <div class="row">
          <div class="col-md-7">
            <p>
              <h4 data-langtext>
                プログラミング以外の経験・知識
              </h4>
              <span data-langtext>
                プログラム開発だけでなく、サーバ、DBの運用・保守のプロジェクトも経験しております。<br />
                そのため、開発・運用に偏らず全体でシステムを捉え、考えることができると思っています。<br /> 
              </span><br />
              <h4 data-langtext>
                新しい知識を吸収する能力
              </h4>
              <span data-langtext>
                これまで様々な業界のシステム構築プロジェクトに参加してまいりました。<br />
                毎回業界知識を一から勉強し、新しいスキルを身につけて職務に勤めてきました。<br />
                また、より技術力をあげるために業務以外でも興味を持ったものについては独学するようにしております。<br />
                React Nativeを使ってAndroid,iOSのスマートフォンアプリ開発や、2D, 3Dのゲーム開発、JavascriptでWebARの開発、NodeJS puppeteer, Python, Goを使ってクローリング、自動化なども行なっています。<br />
                その他、Django、React hook, Styled Component, Expo, Gulp, Webpack, Parcel, PWA, Cordova, Electron, GraphQL, Apollo, PrismaORMなど
                常に新しい技術を勉強し、取り入れることによって自身の価値をあげていけるように心掛けております。
              </span>
            </p>
          </div>
          <div class="col-md-5">
            <ul class="info-list">
              <li>
                <strong data-langtext>名前 : </strong>
                <span data-langtext>金　城局（キム　ソングク）</span>
              </li>
              <li>
                <strong data-langtext>経歴</strong>
                <span data-langtext>8年目ウェブエンジニア</span>
              </li>
              <li>
                <strong data-langtext>希望 : </strong>
                <span data-langtext>関西、フリーランス, フルタイム</span>
              </li>
              <li>
                <strong data-langtext>メール : </strong>
                sungkuk5420@gmail.com
              </li>
              <!--<li><strong>Skype : </strong>  James.Bond</li> -->
            </ul>
            <!-- <ul class="info-list">
              <li>
                <strong data-langtext>お知らせ</strong><br />
                <span data-langtext>2020年4月から稼働できます。</span>
              </li>
            </ul> -->
          </div>
        </div>
      </div>
      <div class="block-content " id="projectList">
        <h3 class="block-title" data-langtext>
          プロジェクト <span class="project-count hide"></span>
        </h3>
        <div class="timeline experience">
          <div class="row ">
            <div class="col-md-12">
              <div class="exp-holder">
                <div class="exp" v-for="(item,index) in projects" :key="index">
                  <div class="hgroup"> 
                    <h4 data-langtext>{{item.name}}</h4>
                    <a v-show="item.github" :href="item.github" target="_blank" style="margin-right:20px;">github</a>
                    <a v-show="item.link" :href="item.link" target="_blank">demo</a>
                    <!-- <h5 data-langtext>{{item.date}}</h5> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-md-12 btn-email">
                <a
                  class="btn lowercase"
                  href="#"
                  onclick="portfolio(); "
                  data-langtext
                  >詳細</a
                ><br />
              </div>
            </div>
            <!--자세히 보기 -->
          </div>
        </div>
      </div>

      <div class="block-content">
        <h3 class="block-title" data-langtext>学歴</h3>
        <div class="timeline education">
          <div class="row ">
            <div class="col-md-12">
              <div class="exp-holder">
                <div class="exp">
                  <div class="hgroup">
                    <h4 data-langtext>
                      仁川国立大学校 – パソコン工学部　卒業（韓国）
                    </h4>
                    <h5 data-langtext>2012年 03月 ~ 2016年 02月</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--block-content end-->

      <div class="block-content">
        <h3 class="block-title" data-langtext>社歴</h3>
        <div class="timeline education">
          <div class="row ">
            <div class="col-md-12">
              <div class="exp-holder">
                <div class="exp" v-for="(item,index) in companys" :key="index">
                  <div class="hgroup">
                    <h4 data-langtext>{{item.name}}</h4>
                    <h5 data-langtext>{{item.date}}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- row end-->
        </div>
      </div>

      <div class="block-content">
        <h3 class="block-title" data-langtext>
          開発
        </h3>
        <div class="row">
          <div class="col-sm-4 col-xs-12 service">
            <div class="service-icon">
              <i class="fa fa-desktop"></i>
            </div>
            <h4 data-langtext>ウェブ開発</h4>
            <p data-langtext>
              ウェブサイト/ ウェブアプリケーション 開発
            </p>
          </div>
          <div class="col-sm-4 col-xs-12 service">
            <div class="service-icon">
              <i class="fa fa-mobile" aria-hidden="true"></i>
            </div>
            <h4 data-langtext>アプリ開発</h4>
            <p data-langtext>
              Cordova, PWA, React Nativeを利用したモバイルアプリ開発
            </p>
          </div>
          <div class="col-sm-4 col-xs-12 service">
            <div class="service-icon">
              <i class=" fa fa-image"></i>
            </div>
            <h4 data-langtext>クローラ</h4>
            <p data-langtext>ウェブクローラ自動データ収集、業務自動化</p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 col-xs-12 service">
            <div class="service-icon">
              <i class=" fa fa-image"></i>
            </div>
            <h4 data-langtext>サーバー</h4>
            <p data-langtext>
              EC2 Linuxサーバーの構築、APIサーバー開発、
            </p>
          </div>
          <div class="col-sm-4 col-xs-12 service">
            <div class="service-icon">
              <i class=" fa fa-image"></i>
            </div>
            <h4 data-langtext>データベース</h4>
            <p data-langtext>データモデリング</p>
          </div>
          <div class="col-sm-4 col-xs-12 service">
            <div class="service-icon">
              <i class=" fa fa-image"></i>
            </div>
            <h4 data-langtext>CI、CD</h4>
            <p data-langtext>ビルド、テスト、デプロイを自動化</p>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="col-md-12 btn-email">
          <a class="btn lowercase" href="#" onclick="contact();"
            >sungkuk5420@gmail.com</a
          ><br />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { T } from "../../store/module-example/types";
import { mapGetters } from "vuex";

export default {
  name: "ContentBlock",
  components: {},
  computed: {
    ...mapGetters({
      projects: "getProjects",
      companys: "getCompanys",
    })
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.index-page {
  display: block;
}
</style>
