#! env bash
echo "Build started"

if [[ -d dist ]]; then
    echo "Deleteing dist dir"
    rm -r dist
    mkdir dist
fi

echo "Copying over js, lib"
cp -v src/js/*.js dist;
cp -vr lib/* dist;

echo "Transpiling stylus"
npm run styles:prod

echo "Transpiling pug"
npm run html:prod

echo "Build done"
exit
