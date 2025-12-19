[ $# -eq 0 ] && echo "No arguments supplied" && exit 0

for arg in "$@"
do
	mkdir -p "ex$arg"
done
