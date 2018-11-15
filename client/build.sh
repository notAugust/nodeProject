#!/bin/bash
export NODE_HOME=/root/.nvm/v6.9.5
export PATH=$NODE_HOME/bin:$PATH
#export NODE_PATH=/home/work/node
#export PATH=$NODE_PATH/bin:$PATH

cd `dirname $0`
BUILD_DIR=`pwd`

echo $BUILD_DIR

function check_error()
{
    if [ ${?} -ne 0 ]
    then
        echo "Error! Please Check..."
        exit 1
    fi
}

rm -rf output
mkdir -p output

cnpm install
# cnpm update
npm run build
check_error

mv dist output
