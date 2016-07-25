function $(id) {return document.getElementById(id);}
function show(obj)
{
	obj.style.display = "block"; 
}
function hide(obj)
{
	obj.style.display = "none";
}
function scroll() {
    if(window.pageYOffset != null)  //  ie9+ �����������
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")  // �������� DTD
    // ����ǲ��ǹ���ģʽ������� -- ����û�� ����<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  ʣ�µĿ϶��ǹ���ģʽ��
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}