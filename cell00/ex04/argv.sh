
[ $# -eq 0 ] && echo "No arguments supplied" && exit 0

echo "$1"
[ $# -ge 2 ] && echo "$2"
[ $# -ge 3 ] && echo "$3"
