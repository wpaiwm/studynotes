cd /home/wp/mydata/github/studynotes
git add . >> /home/wp/gitpush.log
vardate=$(date +%y%m%d)
git commit -m $vardate >> /home/wp/gitpush.log
git push -u origin master >> /home/wp/gitpush.log
