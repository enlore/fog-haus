#! env bash
echo "Build started"
if [[ -d dist ]]; then
    echo "Deleteing dist dir"
    rm -r dist
    mkdir dist
fi

echo "Copying over js, lib"
cp -v src/*.js dist;
cp -vr lib/* dist;

echo "Transpiling stylus"
stylus --out dist src/styl/main.styl;

echo "Transpiling pug"
pug -O data.json --pretty --out dist src/pages/index.pug;

echo "Build done"
exit
