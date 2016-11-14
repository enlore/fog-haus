#! env bash
echo "Build started"

echo "Resetting dist dir"
if [[ -d dist ]]; then
    rm -r dist
fi

mkdir dist

echo "Copying over js, lib"
cp -vr lib/* dist;
cp -v src/js/*.js dist/js;

echo "Transpiling stylus"
npm run styles:prod

echo "Transpiling pug"
npm run html:prod

echo "Build done"
exit
