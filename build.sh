#! env bash
echo "Build started"

echo "Resetting dist dir"
rm -r dist
mkdir dist

echo "Copying over js, lib"
cp -v src/js/*.js dist;
cp -vr lib/* dist;

echo "Transpiling stylus"
npm run styles:prod

echo "Transpiling pug"
npm run html:prod

echo "Build done"
exit
