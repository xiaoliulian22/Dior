const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
// const babel = require("gulp-babel");
// const es2015Preset = require("babel-preset-es2015");
// gulp.task("copy-html", async () => {
//     //把当前目录下的所有html文件拷贝至目录：dest
//     gulp.src("*.html")
//         .pipe(gulp.dest("D:\\phpStudy\\WWW\\web1908\\haha")); //dist目标目录
// });
    // gulp.watch("./**/*", async () => {
    //     //把当前目录下的所有文件拷贝至php的www下面
    //     gulp.src("./**/*")
    //         .pipe(gulp.dest("D:\\phpStudy\\WWW\\bigitemf"))
    // })
    gulp.task("watchall", async ()=>{
        gulp.watch("sass/**/*",async ()=>{
            gulp.src("sass/**/*")
            .pipe(sass())
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\bigitemf\\css"));
        })
    // gulp.task("sass",()=>{
    //     return gulp.src('demo01.scss').pipe(sass()).pipe(gulp.dest('css/demo01.css'));

    // })

    // gulp.task('watch',()=>{
    //     gulp.watch('demo01.scss',['css/demo01.css'])
    // })

//压缩js文件

    // gulp.watch("js/index.js", async () => {
    //     //把当前目录下的所有文件拷贝至php的www下面
    //     gulp.src("js/index.js")
    //     .pipe(babel({presets:[es2015Preset]}))
    //     .pipe(uglify())
    //     .pipe(gulp.dest("D:\\phpStudy\\WWW\\bigitemf\\js"))

    // })
    
})