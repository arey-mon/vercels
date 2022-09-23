#!/bin/sh

export PROD_IP=213.186.33.5
#export NEW_PROD_IP=
#export PRE_PROD_IP=

if [ -d ~/site/tiltmusic/www ]; then
	export PROJECT_PATH=/Users/apollinereymond/42_GIT/tilt_aptests
elif [ -d /Users/julienkrywyk/Pro/MicroEntreprise/Missions/Youmin/www/app-youmin/www/appcore ]; then
	export PROJECT_PATH=/Users/julienkrywyk/Pro/MicroEntreprise/Missions/Youmin/www/app-youmin/www
fi


while test $# -gt 0; do
        case "$1" in
                -h|--help)
                        echo "$package - attempt to deploy"
                        echo " "
                        echo "$package [options] application [arguments]"
                        echo " "
                        echo "options:"
                        echo "-h, --help                show brief help"
                        echo "-d, --dev        			deploy to dev"
                        echo "-p, --prod        		deploy to prod"
                        exit 0
                        ;;
                -p|--prod)
						rsync -avz --delete --exclude 'node_modules' --exclude '.next' --exclude '*.swp' --exclude 'tools' --exclude '.gitignore' --exclude '.git' -e "ssh -p22" ${PROJECT_PATH} debian@${PROD_IP}:/home/debian/site/tiltmusic/
                        shift
                        ;;
                -x|--new-prod)
						#rsync -avz --delete --exclude 'build' --exclude 'db/iddb.js' --exclude 'sql' --exclude 'node_modules' --exclude '.git' --exclude '.gitignore' --exclude '*~' --exclude 'public/img/uploads'  --exclude 'gen-hash-bcrypt*' --exclude 'package-lock.json' -e "ssh -p2222" ~/site/nodece/www nodece@${NEW_PROD_IP}:/home/nodece
                        shift
                        ;;
                -d|--dev|--pre-prod)
						#rsync -avz --delete --exclude 'build' --exclude 'db/iddb.js' --exclude 'sql' --exclude 'node_modules' --exclude '.git'  --exclude '.gitignore' --exclude '*~' --exclude 'public/img/uploads'  --exclude 'gen-hash-bcrypt*' --exclude 'package-lock.json' -e "ssh -p2222" ~/site/nodece/www nodece@${PRE_PROD_IP}:/home/nodece
                        shift
                        ;;
                *)
                        break
                        ;;
        esac
done

# read [options] NAME1 NAME2 ... NAMEN
# rsync -v -e "ssh -p2222" /home/localuser/testfile.txt remoteuser@X.X.X.X:~/transfer
# rsync -avz /source/folder1 /source/folder2 /source/folder3 /backup/

# The syntax for requesting multiple files from a remote host is done
# by specifying additional remote-host args in the same style as the
# first, or with the hostname omitted.  For instance, all these work:

# several files/dir:
#    rsync -av host:file1 :file2 host:file{3,4} /dest/
#    rsync -av host::modname/file{1,2} host::modname/file3 /dest/
#    rsync -av host::modname/file1 ::modname/file{3,4}

# exclude files/dir:
# rsync -avz --exclude 'dir1' source/ destination/
# rsync -avz --exclude 'dir*' source/ destination/
